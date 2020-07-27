import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

SECRET_KEY = 'secretkey'

DEBUG = True

ALLOWED_HOSTS = ['*']

CLOUDINARY_CLOUD_NAME = 'cloudname'
CLOUDINARY_API_KEY = 'apikey'
CLOUDINARY_API_SECRET = 'apisecret'

DB_CONFIG = {
    'ENGINE': 'django.db.backends.sqlite3',
    'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
}

# DB_CONFIG = {
#     'ENGINE': 'django.db.backends.mysql',
#     'NAME': 'hacksprintdb',
#     'USER': 'root',
#     'PASSWORD': '',
#     'HOST': 'localhost',
#     'PORT': '3306'
# }

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

EMAIL_HOST = 'emailhost'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'hostuser'
EMAIL_HOST_PASSWORD = 'hostpassword'
EMAIL_USE_TLS = True
EMAIL_USE_SSL = False





