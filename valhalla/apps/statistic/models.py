from django.db import models

# Create your models here.
from apps.common.models import TimeStampedModel
from apps.devices.models import Indicator
from apps.sensors.models import Device, Local


class ModelIA(models.Model):
    date_initial = models.DateTimeField(blank=True, null=True)
    date_last = models.DateTimeField(blank=True, null=True)
    device = models.ForeignKey(Device, blank=True, null=True, on_delete=models.PROTECT, related_name='models_ia')
    room = models.ForeignKey(Local, blank=True, null=True, on_delete=models.PROTECT, related_name='models_ia')
    indicator = models.ForeignKey(Indicator, blank=True, null=True, on_delete=models.PROTECT)
    model_to_json = models.JSONField(blank=True, null=True)
    recurring_patterns = models.JSONField(blank=True, null=True)
