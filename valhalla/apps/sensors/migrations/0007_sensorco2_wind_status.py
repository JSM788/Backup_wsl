# Generated by Django 4.0.1 on 2022-03-21 20:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0006_device_descripcion'),
    ]

    operations = [
        migrations.AddField(
            model_name='sensorco2',
            name='wind_status',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
    ]