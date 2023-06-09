# Generated by Django 4.0.1 on 2022-03-14 21:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('enterprise', '0007_colaborator_register_date'),
        ('sensors', '0002_sensorco2_actividad_sensorco2_dioxido_carbono_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Local',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('enterprise', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='enterprise.headquarters')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Device',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('dev_eui', models.CharField(blank=True, max_length=300, null=True)),
                ('app_key', models.CharField(blank=True, max_length=300, null=True)),
                ('name', models.CharField(blank=True, max_length=300, null=True)),
                ('local', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='sensors.local')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='sensorco2',
            name='device',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='datos', to='sensors.device'),
        ),
    ]
