from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name = 'index.html')),
    path("admin/", admin.site.urls),
    path('stu/', TemplateView.as_view(template_name = 'index.html')),
    path('admain/', TemplateView.as_view(template_name = 'index.html')),
    path('api/', include('apps.API.urls')),
]
