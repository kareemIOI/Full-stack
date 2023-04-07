from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import login, logout
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .serializers import UserSerializer, LoginSerializer, LogoutSerializer


@method_decorator(csrf_exempt, name='dispatch')
class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@method_decorator(csrf_exempt, name='dispatch')
class UserLoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            token, created = Token.objects.get_or_create(user=user)
            login(request, user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@method_decorator(csrf_exempt, name='dispatch')
class UserLogoutView(APIView):
    def post(self, request):
        serializer = LogoutSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            token = serializer.validated_data['token']
            Token.objects.filter(key=token).delete()
            logout(request)
            return Response({'detail': 'Logged out successfully.'}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def index(request):
    return render(request, 'index.html')