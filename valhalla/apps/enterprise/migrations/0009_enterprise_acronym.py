# Generated by Django 4.0.1 on 2022-12-23 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enterprise', '0008_remove_colaborator_area_remove_colaborator_device_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='enterprise',
            name='acronym',
            field=models.CharField(blank=True, max_length=2, null=True, verbose_name='siglas'),
        ),
    ]
