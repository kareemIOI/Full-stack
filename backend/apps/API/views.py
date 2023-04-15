from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout
from .models import User, Contact
from .serializers import UserSerializer, UserLoginSerializer, UserContactSerializer
from rest_framework.permissions import AllowAny
from django.shortcuts import render
from .serializers import UserLoginSerializer

class UserCreateAPIView(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]


class UserLoginView(APIView):
    serializer_class = UserLoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data['username']
        password = serializer.validated_data['password']

        user = authenticate(username=username, password=password)

        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        else:
            return Response(
                {'error': 'Incorrect username or password'},
                status=status.HTTP_400_BAD_REQUEST
            )

class UserLogoutAPIView(APIView):
    def post(self, request):
        logout(request)
        return Response({'success': 'User has been logged out'})

def index(request):
    return render(request, 'index.html')


class UserContactListCreateAPIView(generics.ListCreateAPIView):
    """
    API endpoint for listing and creating user contacts.
    """
    serializer_class = UserContactSerializer
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]






