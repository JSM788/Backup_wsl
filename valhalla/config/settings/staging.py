
from .base import *
import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration

ALLOWED_HOSTS = ['137.184.22.115', '127.0.0.1']
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'valhalladb',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'localhost',
        'PORT': '',
    }
}

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
CELERY_BROKER_FAKE = os.getenv('CELERY_BROKER_FAKE')
CELERY_TIMEZONE = 'America/Lima'
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_ACCEPT_CONTENT = ['application/json']

if CELERY_BROKER_FAKE == str(True):
    BROKER_BACKEND = 'memory'
    CELERY_TASK_ALWAYS_EAGER = True
    CELERY_TASK_EAGER_PROPAGATES = True
else:
    CELERY_USER = os.getenv('CELERY_USER', 'guest')
    CELERY_PASSWORD = os.getenv('CELERY_PASSWORD', 'guest')
    CELERY_HOST = os.getenv('CELERY_HOST', 'localhost')
    CELERY_PORT = os.getenv('CELERY_PORT', '5672')
    CELERY_DATABASE = os.getenv('CELERY_DATABASE', '/')

    CELERY_BROKER_URL = 'amqp://{}:{}@{}:{}/{}'.format(
        CELERY_USER,
        CELERY_PASSWORD,
        CELERY_HOST,
        CELERY_PORT,
        CELERY_DATABASE
    )

sentry_sdk.init(
    dsn="https://9e7223ff0c8a488ab7ae28e5cd40bddc@o1396498.ingest.sentry.io/6719930",
    integrations=[
        DjangoIntegration(),
    ],

    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production.
    traces_sample_rate=1.0,

    # If you wish to associate users to errors (assuming you are using
    # django.contrib.auth) you may enable sending PII data.
    send_default_pii=True
)