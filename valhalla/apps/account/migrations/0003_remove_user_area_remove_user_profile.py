# Generated by Django 4.0.1 on 2022-11-14 14:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_remove_user_address_remove_user_business_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='area',
        ),
        migrations.RemoveField(
            model_name='user',
            name='profile',
        ),
    ]