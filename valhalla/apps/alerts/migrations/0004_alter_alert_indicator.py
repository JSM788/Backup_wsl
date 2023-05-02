# Generated by Django 4.0.1 on 2022-09-04 20:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alerts', '0003_alert_value'),
    ]

    operations = [
        migrations.AlterField(
            model_name='alert',
            name='indicator',
            field=models.CharField(choices=[('CO2', 'CO2'), ('HCHO', 'HCHO'), ('HUMIDITY', 'HUMIDITY'), ('LIGHT', 'LIGHT'), ('PIR', 'PIR'), ('PM2', 'PM2'), ('PRESSURE', 'PRESSURE'), ('TEMPERATURE', 'TEMPERATURE'), ('TVOC', 'TVOC'), ('PM10', 'PM10')], max_length=11),
        ),
    ]