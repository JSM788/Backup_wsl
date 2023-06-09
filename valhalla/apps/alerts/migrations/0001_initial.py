# Generated by Django 4.0.1 on 2022-09-03 21:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('sensors', '0015_alter_sensorco2_estado_actividad_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Alert',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('level', models.CharField(choices=[('HIGH', 'HIGH'), ('NORMAL', 'NORMAL'), ('LOW', 'LOW')], max_length=20)),
                ('indicator', models.CharField(choices=[('C02', 'C02'), ('HCHO', 'HCHO'), ('HUMIDITY', 'HUMIDITY'), ('LIGHT', 'LIGHT'), ('PIR', 'PIR'), ('PM2', 'PM2'), ('PRESSURE', 'PRESSURE'), ('TEMPERATURE', 'TEMPERATURE'), ('TVOC', 'TVOC'), ('PM10', 'PM10')], max_length=11)),
                ('reading_datetime', models.DateTimeField()),
                ('resolved', models.BooleanField(default=False)),
                ('device', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='alerts', to='sensors.device')),
            ],
            options={
                'ordering': ('-reading_datetime', '-created_at'),
            },
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('content', models.TextField()),
                ('alert', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='alerts.alert')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='comments', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('-created_at',),
            },
        ),
    ]
