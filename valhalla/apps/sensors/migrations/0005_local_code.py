# Generated by Django 4.0.1 on 2022-03-17 02:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0004_local_descripcion_alter_device_local'),
    ]

    operations = [
        migrations.AddField(
            model_name='local',
            name='code',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]
