from django.contrib.auth import authenticate, login
from rest_framework import generics, permissions
from rest_framework.response import Response
from .serializers import UserSerializer, UserContactSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout
from .models import User, Contact
from django.shortcuts import render
from rest_framework.permissions import AllowAny
from django.shortcuts import reverse

class UserCreateAPIView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer
    queryset = User.objects.all()

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username = username, password = password)

        if user is not None:
            auth.login(request, user)
            url = reverse('index.html')
            return url
        else:
            messages.info(request, 'invalid password')
            return redirect('/')
    else:
        return render(request, 'index.html')

class UserLogoutAPIView(APIView):
    def post(self, request):
        logout(request)
        return Response({'success': 'User has been logged out'})

def index(request):
    return render(request, 'index.html')


class UserContactListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserContactSerializer
    queryset = User.objects.all()






