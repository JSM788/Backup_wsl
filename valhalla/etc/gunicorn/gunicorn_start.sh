#!/usr/bin/env bash

ADDRESS=0.0.0.0:8000
SITE_DIR=/home/ubuntu/valhalla
PROJECT_DIR=/home/ubuntu/valhalla
USER=ubuntu
GROUP=ubuntu
NUM_WORKERS=$(python3 -c "import multiprocessing; print(multiprocessing.cpu_count() * 2 + 1)")
TIMEOUT=360
DJANGO_WSGI_MODULE=config.wsgi
VALHALLA_PROJECT_NAME="valhalla"

echo "Starting $NAME as `whoami`"

# Activate the virtual environment
source /home/ubuntu/valenv/bin/activate

# Set additional environment variables.
source /home/ubuntu/.valhalla-apirc

export PYTHONPATH=$SITE_DIR:$PYTHONPATH

cd $PROJECT_DIR

# Start your Django Unicorn
# Programs meant to be run under supervisor should not daemonize themselves (do not use --daemon)
exec /home/ubuntu/valenv/bin/gunicorn ${DJANGO_WSGI_MODULE}:application \
   --name $VALHALLA_PROJECT_NAME \
   --workers $NUM_WORKERS \
   --timeout $TIMEOUT \
   --user=$USER --group=$GROUP \
   --bind=$ADDRESS \
   --log-level=info \
   --log-file=-