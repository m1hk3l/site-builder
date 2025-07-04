#!/bin/sh
set -e

echo "Waiting for PostgreSQL to be ready..."
until pg_isready -h "$POSTGRES_HOST" -p "$POSTGRES_PORT"; do
  sleep 1
done

echo "Running migrations..."
python manage.py migrate

echo "Starting development server..."
exec python manage.py runserver 0.0.0.0:8000
