from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import UserCreateAPIView, UserLoginAPIView, UserLogoutAPIView

urlpatterns = [
    path('signup/', UserCreateAPIView.as_view(), name='signup'),
    path('login/', UserLoginAPIView.as_view(), name='login'),
    path('logout/', UserLogoutAPIView.as_view(), name='logout'),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),  # Used for obtaining auth token
]
