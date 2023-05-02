# Generated by Django 4.0.1 on 2023-01-26 23:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('sensors', '0030_rename_is_activate_local_is_activated'),
        ('devices', '0003_typesensor_indicators'),
    ]

    operations = [
        migrations.CreateModel(
            name='ModelIA',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_initial', models.DateTimeField()),
                ('date_last', models.DateTimeField()),
                ('model_to_json', models.JSONField(blank=True, null=True)),
                ('recurring_patterns', models.JSONField(blank=True, null=True)),
                ('device', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='models_ia', to='sensors.device')),
                ('indicator', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='devices.indicator')),
                ('room', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='models_ia', to='sensors.local')),
            ],
        ),
    ]