from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import AddUsers
from .models import AddUsers
# Create your views here.

class AddUserViews(APIView):
    def post(self, request):
        serializer = AddUserSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'success', 'data': serializer.data}, status = status.HTTP_200_OK)
        else:
            return Response({'status': 'failure', 'data': serializer.errors}, status = status.HTTP_400_BAD_REQUEST)