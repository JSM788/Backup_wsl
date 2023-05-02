from django.db import models

from apps.common.models import TimeStampedModel
from apps.sensors.constants import INDICATORS, LEVELS


# Create your models here.
class Alert(TimeStampedModel):
    device = models.ForeignKey(
        'sensors.Device',
        related_name='alerts',
        on_delete=models.CASCADE
    )
    level = models.CharField(
        max_length=20,
        choices=LEVELS
    )
    indicator = models.CharField(choices=INDICATORS, max_length=11)
    value = models.CharField(max_length=100)
    reading_datetime = models.DateTimeField(null=True)
    resolved = models.BooleanField(default=False)

    class Meta:
        ordering = ('-reading_datetime', '-created_at')

    def __str__(self):
        return f'{self.device} - {self.indicator} - {self.level}'

    @property
    def hours(self):
        if self.created_at:
            return self.created_at.strftime('%I:%M %p')
        return ''


class Comment(TimeStampedModel):
    alert = models.ForeignKey(
        'alerts.Alert',
        related_name='comments',
        on_delete=models.CASCADE

    )
    user = models.ForeignKey(
        'account.User',
        related_name='comments',
        on_delete=models.PROTECT
    )
    content = models.TextField()

    class Meta:
        ordering = ('-created_at',)
