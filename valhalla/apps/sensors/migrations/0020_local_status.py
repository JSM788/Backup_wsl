# Generated by Django 4.0.1 on 2022-09-15 19:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0019_remove_sensorco2_activity_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='local',
            name='status',
            field=models.CharField(blank=True, choices=[('EXCELLENT', 'EXCELLENT'), ('CONTAMINATED', 'CONTAMINATED'), ('DANGEROUS', 'DANGEROUS')], max_length=12, null=True),
        ),
    ]
