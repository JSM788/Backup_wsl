from .base import *

ALLOWED_HOSTS = ['*',]
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, '../db.sqlite3'),
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