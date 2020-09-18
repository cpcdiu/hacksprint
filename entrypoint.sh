#!/bin/sh
 
# python manage.py makemigrations --noinput
python manage.py collectstatic --noinput
python manage.py migrate --noinput
gunicorn hacksprint.wsgi:application --bind 0.0.0.0:8000

exec "$@"