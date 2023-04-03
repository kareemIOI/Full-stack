from .base import *

DEBUG = False

ALLOWED_HOSTS = ['localhost',]

CASHES = {
    "default": {
        'BACKEND': 'django.core.cache.memcahed.Memcachedcache',
    }
}

EMAIL_BACKEND = 'django.core.mail.backend.swtp.Email' #to be continued

EMAIL_HOST = 'example@org'