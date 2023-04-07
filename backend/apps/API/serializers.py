from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'password', 'address', 'Phone', 'father_name', 'mother_name', 'short_bio', 'gender', 'blood', 'status', 'religion']

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            address=validated_data['address'],
            Phone=validated_data['Phone'],
            father_name=validated_data['father_name'],
            mother_name=validated_data['mother_name'],
            short_bio=validated_data['short_bio'],
            gender=validated_data['gender'],
            blood=validated_data['blood'],
            status=validated_data['status'],
            religion=validated_data['religion']
        )
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(
            email=data['email'], password=data['password'])
        if user:
            if user.ifLogged == False:
                user.ifLogged = True
                user.save()
                return user
            else:
                raise serializers.ValidationError("User is already logged in!")
        else:
            raise serializers.ValidationError("Incorrect email or password!")


class LogoutSerializer(serializers.Serializer):
    token = serializers.CharField()

    def validate(self, data):
        user = User.objects.filter(token=data['token']).first()
        if user:
            user.ifLogged = False
            user.token = ""
            user.save()
            return user
        else:
            raise serializers.ValidationError("Invalid token!")
