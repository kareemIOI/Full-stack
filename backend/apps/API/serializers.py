from django.db.models import Q # for queries
from rest_framework.validators import UniqueValidator
from .models import User
from django.core.exceptions import ValidationError
from uuid import uuid64
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    email = serializeres.EmailField(
        required = True,
        validator = [UniqueValidator(queryset = User.objects.all())]
    )
    username = serializers.CharField(
        required = True,
        validator = [UniqueValidator(queryset = User.objects.all())]
    )
    password = serializers.CharField(max_length = 8)



    class Meta:
        model = User
        fields = '__all__'
        
class UserLoginSerializer(serializers.ModelSerializer):
    pass

# class AddUserSerializer(serializers.Serializer):
#     first_name = serializers.CharField(max_length = 255)
#     last_name = serializers.CharField(max_length = 255)
#     email = serializers.EmailField()
#     password = serializers.CharField(max_length = 30)
#     address = serializers.CharField(max_length = 255)
#     Phone = serializers.CharField(max_length = 10)
#     father_name = serializers.CharField(max_length = 255)
#     mother_name = serializers.CharField(max_length = 255)
#     short_bio = serializers.CharField()
#     # created_at = serializers.DateTimeField(auto_now_add=True)
#     # updated_at = serializers.DateTimeField(auto_now=True)
    
    
#     class Meta:
#         model = AddUsers
#         fields = '__all__'