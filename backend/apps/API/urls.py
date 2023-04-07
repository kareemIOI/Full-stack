from django.urls import path
from .views import AddUserViews


urlpatterns = [
    path('add/', AddUserViews.as_view())
]
