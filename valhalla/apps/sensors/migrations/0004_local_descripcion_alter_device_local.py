# Generated by Django 4.0.1 on 2022-03-16 02:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0003_local_device_sensorco2_device'),
    ]

    operations = [
        migrations.AddField(
            model_name='local',
            name='descripcion',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='device',
            name='local',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='devices', to='sensors.local'),
        ),
    ]
