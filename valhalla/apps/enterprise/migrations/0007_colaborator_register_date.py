# Generated by Django 4.0.1 on 2022-02-05 00:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enterprise', '0006_colaborator_device'),
    ]

    operations = [
        migrations.AddField(
            model_name='colaborator',
            name='register_date',
            field=models.DateField(blank=True, null=True, verbose_name='fecha de registro'),
        ),
    ]