# Generated by Django 4.0.1 on 2022-12-02 04:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_remove_user_area_remove_user_profile'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='send_email',
            field=models.BooleanField(default=False),
        ),
    ]