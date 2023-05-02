# Generated by Django 4.0.1 on 2022-06-21 05:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0011_remove_device_ambient_remove_local_enterprise_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='sensorco2',
            name='estado_actividad',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='estado_barometric_presion',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='estado_hcho',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='estado_humidity',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='estado_illumination',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='estado_infrared',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='estado_infrared_and_visible',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='estado_ozono',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='estado_pir',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='estado_pm2',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='estado_pressure',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='estado_temperature',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='estado_tvoc',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
    ]
