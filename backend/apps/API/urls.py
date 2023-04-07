from django.urls import path
from .views import Record, Login, Logout
from . import views

urlpatterns = [
    path('', views.index, name = 'admain'),
    path('addUser/', Record.as_view(), name="register"),
    path('login/', Login.as_view(), name="login"),
    path('logout/', Logout.as_view(), name="logout"),
    ]
