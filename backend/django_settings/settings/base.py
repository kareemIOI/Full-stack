# SECRET_KEY = "django-insecure-hhiszdmrpyen*r3%19u)r*&z^tdc1192wkqlz5huz@w2mic&-+"

# DEFAULT_APPS = [
#     "django.contrib.admin",
#     "django.contrib.auth",
#     "django.contrib.contenttypes",
#     "django.contrib.sessions",
#     "django.contrib.messages",
#     "django.contrib.staticfiles",
# ]

# THIRD_PARTY_APPS = [
#     'whitenoise',
#     'corsheaders',
#     'rest_framework'
# ]

# LOCAL_APPS = [
#     'apps.home',
#     'apps.students',
#     'apps.teachers',
# ]
# INSTALLED_APPS = DEFAULT_APPS + THIRD_PARTY_APPS + LOCAL_APPS


# MIDDLEWARE = [
#     'corsheaders.middleware.CorsMiddleware',
#     'django.middleware.security.SecurityMiddleware',
#     'django.contrib.sessions.middleware.SessionMiddleware',
#     'django.middleware.common.CommonMiddleware',
#     'django.middleware.csrf.CsrfViewMiddleware',
#     'whitenoise.middleware.WhiteNoiseMiddleware',
#     'django.contrib.auth.middleware.AuthenticationMiddleware',
#     'django.contrib.messages.middleware.MessageMiddleware',
#     'django.middleware.clickjacking.XFrameOptionsMiddleware',
# ]

# CORS_ORIGIN_ALLOW_ALL = True
# CORS_ORIGIN_WHITELIST = [
#     'http://localhost:3000',
# ]

# ROOT_URLCONF = "django_settings.urls"

# TEMPLATES = [
#     {
#         "BACKEND": "django.template.backends.django.DjangoTemplates",
#         "DIRS": [],
#         "APP_DIRS": True,
#         "OPTIONS": {
#             "context_processors": [
#                 "django.template.context_processors.debug",
#                 "django.template.context_processors.request",
#                 "django.contrib.auth.context_processors.auth",
#                 "django.contrib.messages.context_processors.messages",
#             ],
#         },
#     },
# ]

# WSGI_APPLICATION = "django_settings.wsgi.application"


# # Database
# # https://docs.djangoproject.com/en/4.1/ref/settings/#databases

# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.postgresql_psycopg2",
#         "NAME": 'SchoolDB',
#         'USER': 'manager',
#         'PASSWORD': 'manager',
#         'HOST': '127.0.0.1',
#         'PORT': '5432',
#     }
# }
# STATIC_URL = "static/"

# # Default primary key field type
# # https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field