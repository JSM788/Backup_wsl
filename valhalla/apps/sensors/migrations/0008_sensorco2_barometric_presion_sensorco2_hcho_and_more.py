# Generated by Django 4.0.1 on 2022-05-25 01:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0007_sensorco2_wind_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='sensorco2',
            name='barometric_presion',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='hcho',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='ozono',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='pir',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='pm2',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
    ]
