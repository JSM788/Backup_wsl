from django.core.validators import MaxValueValidator
from django.db import models, transaction

from apps.common.models import TimeStampedModel
# Create your models here.
from apps.devices.models import TypeSensor
from apps.enterprise.models import Headquarters
from apps.sensors.constants import LEVELS, HIGH, NORMAL, LOW, GENERAL_STATUS, DANGEROUS, EXCELLENT, CONTAMINATED, \
    SOCKET_STATE


class Local(TimeStampedModel):
    code = models.CharField(max_length=300, blank=True, null=True)
    name = models.CharField(max_length=200, blank=True, null=True)
    headquarter = models.ForeignKey(Headquarters, blank=True, null=True, on_delete=models.PROTECT)
    description = models.CharField(max_length=300, blank=True, null=True)
    is_activated = models.BooleanField(blank=True, null=True, default=True)
    status = models.CharField(max_length=12, blank=True, null=True, choices=GENERAL_STATUS)
    registered_indicators = models.CharField(max_length=300, blank=True, null=True)

    @property
    def headquarter_name(self):
        return self.headquarter.name

    def __str__(self):
        return f'{self.headquarter}-{self.name}'

    @property
    def num_sensor(self):
        num_sensors = self.devices.count()
        return num_sensors

    @property
    def device_assigned(self):
        sensor_exists = self.devices.count() > 0 if True else False
        return sensor_exists

    @property
    def code_sensors(self):
        list_sensors = []
        list_sensors = [{"id": i.id, "dev_eui": i.dev_eui} for i in self.devices.all()]
        return list_sensors


class Device(TimeStampedModel):
    local = models.ForeignKey(Local, blank=True, null=True, on_delete=models.PROTECT, related_name='devices')
    type_sensor = models.ForeignKey(TypeSensor, blank=True, null=True, on_delete=models.PROTECT)
    dev_eui = models.CharField(blank=True, null=True, max_length=300)
    app_key = models.CharField(blank=True, null=True, max_length=300)
    name = models.CharField(blank=True, null=True, max_length=300)
    description = models.CharField(blank=True, null=True, max_length=300)
    is_activated = models.BooleanField(blank=True, null=True, default=False)

    def __str__(self):
        return f'{self.name} - {self.dev_eui}'

    @property
    def local_name(self):
        if self.local:
            return self.local.name

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        with transaction.atomic():
            if self.local:
                room = Local.objects.get(pk=self.local.id)
                room_indicators = room.registered_indicators
                if room_indicators:
                    room_indicators = room_indicators.split(',')
                else:
                    room_indicators = []
                sensor_indicator_list = self.type_sensor.indicators.values_list('name', flat=True)
                for indicator in sensor_indicator_list:
                    if indicator not in room_indicators:
                        room_indicators.append(indicator)
                        room.registered_indicators = ",".join(room_indicators)
                        room.save()
            super().save(force_insert, force_update, using, update_fields)


class Socket(models.Model):
    dev_eui = models.CharField(blank=True, null=True, max_length=100)
    name = models.CharField(blank=True, null=True, max_length=100)
    state = models.CharField(blank=True, null=True, max_length=5, choices=SOCKET_STATE)
    room = models.ForeignKey(Local, blank=True, null=True, on_delete=models.PROTECT)

    class Meta:
        verbose_name = 'Socket'
        verbose_name_plural = 'Sockets'

    def __str__(self):
        return f'{self.name} - {self.dev_eui}'


class SocketData(models.Model):
    factor = models.PositiveIntegerField(blank=True, null=True, validators=[MaxValueValidator(100)])
    current = models.FloatField(blank=True, null=True)
    voltage = models.FloatField(blank=True, null=True)
    power_sum = models.FloatField(blank=True, null=True)
    power = models.FloatField(blank=True, null=True)
    state = models.CharField(blank=True, null=True, max_length=5, choices=SOCKET_STATE)
    socket = models.ForeignKey(Socket, on_delete=models.PROTECT)

    class Meta:
        verbose_name = 'Datos de Socket'
        verbose_name_plural = 'Datos de los Sockets'

    def __str__(self):
        return f'{self.id} - {self.socket}'


class AverageRoomIndicators(TimeStampedModel):
    room = models.ForeignKey(Local, blank=False, null=True, on_delete=models.PROTECT)
    carbon_dioxide = models.FloatField(max_length=400, blank=True, null=True)
    status_carbon_dioxide = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    humidity = models.FloatField(max_length=400, blank=True, null=True)
    status_humidity = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    illumination = models.FloatField(max_length=400, blank=True, null=True)
    status_illumination = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    pressure = models.FloatField(max_length=400, blank=True, null=True)
    status_pressure = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    temperature = models.FloatField(max_length=400, blank=True, null=True)
    status_temperature = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    tvoc = models.FloatField(max_length=400, blank=True, null=True)
    status_tvoc = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    hcho = models.FloatField(max_length=400, blank=True, null=True)
    status_hcho = models.CharField(max_length=400, blank=True, null=True)
    ozone = models.FloatField(max_length=400, blank=True, null=True)
    status_ozone = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    pm2 = models.FloatField(max_length=400, blank=True, null=True)
    status_pm2 = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    pm10 = models.FloatField(max_length=400, blank=True, null=True)
    status_pm10 = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    count_data = models.IntegerField(max_length=1000, blank=True, null=True, default=0)
    general_status = models.CharField(max_length=12, default=EXCELLENT, choices=GENERAL_STATUS)

    def __str__(self):
        return f'Created at: {self.created_at.date()} Room: {self.room.name}'

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        with transaction.atomic():
            self.count_data += 1
            save_umbral_comparative(self)
            super().save(force_insert, force_update, using, update_fields)


class SensorCO2(TimeStampedModel):
    device = models.ForeignKey(Device, blank=True, null=True, related_name='data', on_delete=models.PROTECT)
    room = models.ForeignKey(Local, blank=True, null=True, related_name='data_room', on_delete=models.PROTECT)
    val_sensor = models.JSONField(blank=True, null=True)
    carbon_dioxide = models.CharField(max_length=400, blank=True, null=True)
    status_carbon_dioxide = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    humidity = models.CharField(max_length=400, blank=True, null=True)
    status_humidity = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    illumination = models.CharField(max_length=400, blank=True, null=True)
    status_illumination = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    pressure = models.CharField(max_length=400, blank=True, null=True)
    status_pressure = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    temperature = models.CharField(max_length=400, blank=True, null=True)
    status_temperature = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    tvoc = models.CharField(max_length=400, blank=True, null=True)
    status_tvoc = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    hcho = models.CharField(max_length=400, blank=True, null=True)
    status_hcho = models.CharField(max_length=400, blank=True, null=True)
    ozone = models.CharField(max_length=400, blank=True, null=True)
    status_ozone = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    pm2 = models.CharField(max_length=400, blank=True, null=True)
    status_pm2 = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    pir = models.CharField(max_length=400, blank=True, null=True)
    status_pir = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    pm10 = models.CharField(max_length=400, blank=True, null=True)
    status_pm10 = models.CharField(max_length=20, blank=True, null=True, choices=LEVELS)
    general_status = models.CharField(max_length=12, default=EXCELLENT, choices=GENERAL_STATUS)

    def __str__(self):
        return f'{self.id}- {self.device}'

    @property
    def hours(self):
        if self.created_at:
            return self.created_at.strftime('%I:%M %p')
        return ''

    @property
    def id_device(self):
        if self.device:
            return self.device.id
        return ''

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        with transaction.atomic():
            save_umbral_comparative(self)

            super().save(force_insert, force_update, using, update_fields)

    class Meta:
        verbose_name = 'Registro de CO2'
        verbose_name_plural = 'Registro de CO2'


def umbral_comparative(obj, umbrals, field):
    status_room = obj.general_status
    dangerous = True if status_room == "DANGEROUS" else False
    contaminated = True if status_room == "CONTAMINATED" else False
    not_indicators = ("humidity", "illumination", "temperature", "pressure")
    indicator = getattr(obj, field)
    if indicator is not None:
        indicator = float(indicator)
        if indicator > umbrals[1]:
            status = HIGH
            dangerous = True
        elif umbrals[0] < indicator <= umbrals[1]:
            status = LOW if field in not_indicators else NORMAL
            contaminated = True
        else:
            status = NORMAL if field in not_indicators else LOW

        if field not in not_indicators:
            if contaminated:
                status_room = CONTAMINATED
            if dangerous:
                status_room = DANGEROUS
            obj.general_status = status_room

        setattr(obj, f'status_{field}', status)


def save_umbral_comparative(obj):
    key_fields = [
        ('carbon_dioxide', (800, 1000)),
        ('hcho', (0.12, 0.37)),
        ('humidity', (30, 70)),
        ('illumination', (500, 1000)),
        ('pm2', (35.4, 150.4)),
        ('pressure', (1012, 1014)),
        ('temperature', (16, 27)),
        ('tvoc', (150, 250)),
        ('pm10', (154, 354)),
        ('ozone', (120, 200)),
    ]

    for key, umbrals in key_fields:
        umbral_comparative(obj, umbrals, key)


def statistics_status_indicator(indicator, value):
    obj = AverageRoomIndicators()
    setattr(obj, indicator, value)
    save_umbral_comparative(obj)
    return getattr(obj, f"status_{indicator}")
