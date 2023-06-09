# Generated by Django 4.0.1 on 2022-03-10 23:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SensorCO2',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('val_sensor', models.JSONField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Registro de CO2',
                'verbose_name_plural': 'Registro de CO2',
            },
        ),
    ]
