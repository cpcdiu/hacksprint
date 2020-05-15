import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SECRET_KEY = 'somesecretkey'
DEBUG = True
ALLOWED_HOSTS = ['*']
CLOUDINARY_CLOUD_NAME = ''
CLOUDINARY_API_KEY = ''
CLOUDINARY_API_SECRET = ''
DB_CONFIG = {
    'ENGINE': 'django.db.backends.sqlite3',
    'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
}
