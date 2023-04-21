from django.urls import path
from .views import UserCreateAPIView, UserLogoutAPIView, UserContactListCreateAPIView
from . import views

urlpatterns = [
    path('addUser/', UserCreateAPIView.as_view(), name='addUser'),
    path('login/', views.login, name='login'),
    path('logout/', UserLogoutAPIView.as_view(), name='logout'),
    path('', views.index, name='index'),
    path('contacts/', UserContactListCreateAPIView.as_view(), name='user-contact-list-create'),
]
