from __future__ import absolute_import, unicode_literals

import os
from datetime import timedelta
from celery import Celery
from django.conf import settings

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', os.getenv('DJANGO_CELERY_ROUTES', default='config.settings.production'))

app = Celery('config')

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
#   should have a `CELERY_` prefix.
app.config_from_object('django.conf:settings', namespace='CELERY')

# Load task modules from all registered Django app configs.
app.autodiscover_tasks()

# Celery beat settings
app.conf.beat_schedule = {
    'sending-mail-for-sensor-off': {
        'task': 'apps.sensors.tasks.tasks_gateway.monitoring_status_devices',
        'schedule': timedelta(minutes=5),
    }
}

# lambda: settings.INSTALLED_APPS


@app.task(bind=True)
def debug_task(self):
    print('Request: {0!r}'.format(self.request))
