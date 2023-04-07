from rest_framework import serializers
from .models import AddUsers



class AddUserSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length = 255)
    last_name = serializers.CharField(max_length = 255)
    email = serializers.EmailField()
    password = serializers.CharField(max_length = 30)
    address = serializers.CharField(max_length = 255)
    Phone = serializers.CharField(max_length = 10)
    father_name = serializers.CharField(max_length = 255)
    mother_name = serializers.CharField(max_length = 255)
    short_bio = serializers.CharField()
    # created_at = serializers.DateTimeField(auto_now_add=True)
    # updated_at = serializers.DateTimeField(auto_now=True)
    
    
    class Meta:
        model = AddUsers
        fields = '__all__'