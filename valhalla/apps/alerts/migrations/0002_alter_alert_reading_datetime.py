# Generated by Django 4.0.1 on 2022-09-04 05:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alerts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='alert',
            name='reading_datetime',
            field=models.DateTimeField(null=True),
        ),
    ]
