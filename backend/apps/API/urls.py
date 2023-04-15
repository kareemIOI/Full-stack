from django.urls import path
from .views import UserCreateAPIView, UserLoginView, UserLogoutAPIView,UserContactListCreateAPIView
from . import views

#TODO all api endpoints here

urlpatterns = [
    path('addUser/', UserCreateAPIView.as_view(), name='addUser'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('logout/', UserLogoutAPIView.as_view(), name='logout'),
    path('', views.index, name = 'index'),
    path('contacts/', UserContactListCreateAPIView.as_view(), name='user-contact-list-create'),
]
