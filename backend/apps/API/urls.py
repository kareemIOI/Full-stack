from django.urls import path
from .views import UserCreateAPIView, UserLoginAPIView, UserLogoutAPIView

urlpatterns = [
    path('addUser/', UserCreateAPIView.as_view(), name='addUser'),
    path('login/', UserLoginAPIView.as_view(), name='login'),
    path('logout/', UserLogoutAPIView.as_view(), name='logout'),
]
