from django.urls import path
from .views import UserCreateAPIView, UserLoginAPIView, UserLogoutAPIView
from . import views

#TODO all api endpoints here

urlpatterns = [
    path('addUser/', UserCreateAPIView.as_view(), name='addUser'),
    path('login/', UserLoginAPIView.as_view(), name='login'),
    path('logout/', UserLogoutAPIView.as_view(), name='logout'),
    path('', views.index, name = 'index'),
]
