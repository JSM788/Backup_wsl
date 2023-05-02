import os

import pytz
from datetime import timezone
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.datetime_safe import datetime
from functools import lru_cache
from email.mime.image import MIMEImage

from apps.account.models import User
from apps.alerts.models import Alert
from apps.sensors.constants import EXCELLENT, NORMAL, HIGH, CO2, HCHO, PM2, TVOC, PM10, OZONE, LOW, STATUS_ES
from config.settings.base import TIME_ZONE, EMAIL_HOST_USER
from config.celery import app
from apps.sensors.models import SensorCO2, Device, Local, AverageRoomIndicators, Socket, SocketData


@app.task()
def task_gateway_socket(data):
    data = dict(data)
    print(data)
    dev_eui = data.get('devEUI')
    if dev_eui and len(data) == 7:
        socket = Socket.objects.filter(dev_eui=dev_eui).first()
        if socket:
            fields = ('factor', 'current', 'voltage', 'power_sum', 'power', 'state')
            data_socket = SocketData()
            data_socket.socket = socket
            for field in fields:
                setattr(data_socket, field, data.get(field))
            data_socket.save()


@app.task()
def task_gateway(data):
    print(data)
    data = dict(data)
    beep = data.get('beep')
    dev_eui = data.get('devEUI')
    if dev_eui and beep is None and len(data) >= 3:
        device = Device.objects.filter(dev_eui=dev_eui).only('id').first()
        if device:
            # TODO: change name fields in SensorCo2 model
            key_fields = [
                ('co2', 'carbon_dioxide'),
                ('hcho', 'hcho'),
                ('humidity', 'humidity'),
                ('light_level', 'illumination'),
                ('pir', 'pir'),
                ('pm2_5', 'pm2'),
                ('pressure', 'pressure'),
                ('temperature', 'temperature'),
                ('tvoc', 'tvoc'),
                ('pm10', 'pm10')
            ]

            sensor = SensorCO2()
            sensor.device = device
            print(device)
            sensor.val_sensor = data

            today = datetime.now().date()
            local = Local.objects.filter(id=device.local.id).first()
            sensor.room = local
            average_room = AverageRoomIndicators.objects.filter(room_id=local.id, created_at__date=today).first()

            if average_room is None:
                average_room = AverageRoomIndicators()

            for key, field in key_fields:
                if key in data:
                    value = data.get(key)
                    if key == 'hcho':
                        value = str(round(float(data.get(key)) / 10, 2))
                    if key != 'pir':
                        if average_room.id is None:
                            setattr(average_room, field, value)
                        else:
                            prom_old = getattr(average_room, field)
                            count = average_room.count_data
                            new_prom = round((count * prom_old + float(value)) / (count + 1), 2)

                            setattr(average_room, field, new_prom)

                    setattr(sensor, field, value)

            sensor_last_id = SensorCO2.objects.filter(device__local_id=local.id).last().id
            sensor.save()
            task_generated_alert.delay(sensor.id, sensor_last_id)
            # Update general status of Local
            local.status = sensor.general_status
            local.save()

            # Update or created AverageRoom
            average_room.room = local
            average_room.general_status = EXCELLENT
            average_room.save()


@app.task()
def task_generated_alert(sensor_id, sensor_last_id):
    sensor = SensorCO2.objects.get(pk=sensor_id)
    sensor_last = SensorCO2.objects.get(pk=sensor_last_id)
    constants = {
        'carbon_dioxide': CO2,
        'hcho': HCHO,
        'pm2': PM2,
        'tvoc': TVOC,
        'pm10': PM10,
        'ozone': OZONE,
    }
    for key, indicator in constants.items():
        status_before = getattr(sensor_last, f"status_{key}")
        status_after = getattr(sensor, f"status_{key}")
        value_indicator = getattr(sensor, key)
        if (status_before == LOW and status_after in (NORMAL, HIGH)) or (
                status_before == NORMAL and status_after == HIGH):
            Alert.objects.create(
                device=sensor.device, level=status_after, indicator=indicator,
                value=value_indicator)
            if status_after == 'HIGH':
                task_send_alert_by_email.delay(sensor_id=sensor_id, status_before=status_before,
                                               status_after=status_after,
                                               indicator=indicator)


@app.task()
def task_send_alert_by_email(**data):
    sensor_data = SensorCO2.objects.get(pk=data['sensor_id'])
    room = sensor_data.device.local
    headquarter = room.headquarter
    enterprise = headquarter.enterprise
    emails_support = ('sleon@valhalla.com.pe', 'ronaldf@valhalla.com.pe', 'jhonaz@valhalla.com.pe',)
    emails = User.objects.filter(enterprise_id=enterprise.id, send_email=True).values_list('email', flat=True)
    emails = list(emails).extend(emails_support)
    if len(emails):
        date, time = sensor_data.created_at.astimezone(pytz.timezone(TIME_ZONE)).strftime("%Y-%m-%d %H:%M").split(' ')
        # Context
        context = {
            'room': room,
            'headquarter': headquarter,
            'indicator': data['indicator'],
            'status_after': STATUS_ES[data['status_after']],
            'date': date,
            'time': time
        }

        subject = f"Alerta en {headquarter.name} - {room.name} - {data['indicator']}"
        message = ""
        message_html = render_to_string('email_by_indicator.html', context=context)
        msg = EmailMultiAlternatives(
            subject=subject,
            body=message,
            from_email=EMAIL_HOST_USER,
            to=emails)
        msg.mixed_subtype = 'relative'
        msg.attach_alternative(message_html, "text/html")
        imgs = ('alerta.png', 'estado.png', 'ambiente.png', 'calendario.png', 'reloj.png')
        img_dir = 'static'
        for img in imgs:
            file_path = file_path = os.path.join(img_dir, img)
            with open(file_path, 'rb') as f:
                image = MIMEImage(f.read())
                image.add_header('Content-ID', '<{name}>'.format(name=img))
                image.add_header('Content-Disposition', 'inline', filename=img)
            msg.attach(image)
        msg.send(fail_silently=False)


@app.task
def monitoring_status_devices():
    devices = Device.objects.filter(is_activated=True)

    for device in devices:
        today = datetime.now(timezone.utc)
        last_data = SensorCO2.objects.filter(device_id=device.id).order_by('created_at').last()
        if last_data:
            res = today - last_data.created_at
            if res.seconds / 60 > 7:
                emails_support = ('sleon@valhalla.com.pe', 'ronaldf@valhalla.com.pe', 'jhonaz@valhalla.com.pe',)
                room = device.local
                if room and room.is_activated:
                    headquarter = room.headquarter
                    enterprise = headquarter.enterprise
                    subject = f"Alerta el sensor {device.dev_eui} no esta enviando datos"
                    message = f"No se esta enviando datos del sensor con DevEUI {device.dev_eui}, este se encuentra en {enterprise.name} - {headquarter.name} - {room.name}"
                    send_mail(subject=subject, message=message, from_email=EMAIL_HOST_USER,
                              recipient_list=emails_support)
