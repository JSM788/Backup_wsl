# Generated by Django 4.0.1 on 2023-01-26 18:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0029_local_is_activate'),
    ]

    operations = [
        migrations.RenameField(
            model_name='local',
            old_name='is_activate',
            new_name='is_activated',
        ),
    ]
