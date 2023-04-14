from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import User, Contact
from django.shortcuts import redirect
from rest_framework.response import Response


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name', 'address', 'phone_number','father_name', 'mother_name', 'short_bio')
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

class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')


class UserTokenSerializer(serializers.Serializer):
    token = serializers.CharField()


class UserContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
