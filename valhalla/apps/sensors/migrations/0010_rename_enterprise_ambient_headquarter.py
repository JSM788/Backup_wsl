# Generated by Django 4.0.1 on 2022-05-30 21:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0009_ambient_device_ambient'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ambient',
            old_name='enterprise',
            new_name='headquarter',
        ),
    ]
