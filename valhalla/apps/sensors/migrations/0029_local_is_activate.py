# Generated by Django 4.0.1 on 2023-01-26 17:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0028_remove_local_ambient_local_headquarter_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='local',
            name='is_activate',
            field=models.BooleanField(blank=True, default=True, null=True),
        ),
    ]
