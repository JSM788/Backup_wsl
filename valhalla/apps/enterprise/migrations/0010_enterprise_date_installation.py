# Generated by Django 4.0.1 on 2023-01-04 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enterprise', '0009_enterprise_acronym'),
    ]

    operations = [
        migrations.AddField(
            model_name='enterprise',
            name='date_installation',
            field=models.DateField(blank=True, null=True, verbose_name='instalacion'),
        ),
    ]
