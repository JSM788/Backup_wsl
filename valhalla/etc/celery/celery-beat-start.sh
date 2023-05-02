#!/usr/bin/env bash

PROJECT_DIR=/home/ubuntu/valhalla

# Activate the virtual environment
source /home/ubuntu/valenv/bin/activate

# Set additional environment variables.
source /home/ubuntu/.valhalla-apirc

cd $PROJECT_DIR

exec /home/ubuntu/valenv/bin/celery -A config worker  --beat --scheduler django --pool=prefork --concurrency=10 --loglevel=info
