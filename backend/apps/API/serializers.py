from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import User
from django.shortcuts import redirect

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name', 'address', 'Phone','father_name', 'mother_name', 'short_bio', 'gender', 'blood', 'status', 'religion')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        user = super().create(validated_data)
        print(user)
        return user

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data.get('password'))
        return super().update(instance, validated_data)


class UserLoginSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = ('username', 'password')

class UserTokenSerializer(serializers.Serializer):
    token = serializers.CharField()
