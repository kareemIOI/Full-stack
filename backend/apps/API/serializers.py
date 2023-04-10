from django.db.models import Q # for queries
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import User
from django.core.exceptions import ValidationError

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
        )
    username = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
        )
    password = serializers.CharField(max_length=8)
    
    first_name = serializers.CharField(max_length=255, required=False)
    last_name = serializers.CharField(max_length=255, required=False)
    address = serializers.CharField(max_length=255, required=False)
    Phone = serializers.CharField(max_length=10, required=False)
    father_name = serializers.CharField(max_length=255, required=False)
    mother_name = serializers.CharField(max_length=255, required=False)
    short_bio = serializers.CharField(max_length=200, required=False)
    gender = serializers.CharField(max_length=6, required=False, allow_blank=True, allow_null=True)
    blood = serializers.CharField(max_length=3, required=False, allow_blank=True)
    status = serializers.ChoiceField(choices=User.STATUS_USER, required=False)
    religion = serializers.ChoiceField(choices=User.RELIGION_STATUS, required=False)
    ifLogged = serializers.BooleanField(default=False)
    
    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password']
        )
        user.first_name = validated_data.get('first_name', '')
        user.last_name = validated_data.get('last_name', '')
        user.address = validated_data.get('address', '')
        user.Phone = validated_data.get('Phone', 'xxxxxxxxxx')
        user.father_name = validated_data.get('father_name', '')
        user.mother_name = validated_data.get('mother_name', '')
        user.short_bio = validated_data.get('short_bio', '')
        user.gender = validated_data.get('gender', '')
        user.blood = validated_data.get('blood', '')
        user.status = validated_data.get('status', '')
        user.religion = validated_data.get('religion', '')
        user.ifLogged = validated_data.get('ifLogged', False)
        user.save()
        return user
    
    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.username = validated_data.get('username', instance.username)
        instance.password = validated_data.get('password', instance.password)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.address = validated_data.get('address', instance.address)
        instance.Phone = validated_data.get('Phone', instance.Phone)
        instance.father_name = validated_data.get('father_name', instance.father_name)
        instance.mother_name = validated_data.get('mother_name', instance.mother_name)
        instance.short_bio = validated_data.get('short_bio', instance.short_bio)
        instance.gender = validated_data.get('gender', instance.gender)
        instance.blood = validated_data.get('blood', instance.blood)
        instance.status = validated_data.get('status', instance.status)
        instance.religion = validated_data.get('religion', instance.religion)
        instance.ifLogged = validated_data.get('ifLogged', instance.ifLogged)
        instance.save()
        return instance
    
    class Meta:
        model = User
        fields = (
            'username',
            'email',
            'password',
            'first_name',
            'last_name',
            'address',
            'Phone',
            'father_name',
            'mother_name',
            'short_bio',
            'gender',
            'blood',
            'status',
            'religion',
            'ifLogged'
        )


class UserLoginSerializer(serializers.ModelSerializer):
    # to accept either username or email
    user_id = serializers.CharField()
    password = serializers.CharField()
    token = serializers.CharField(required=False, read_only=True)

    def validate(self, data):
        # user,email,password validator
        user_id = data.get("user_id", None)
        password = data.get("password", None)
        if not user_id and not password:
            raise ValidationError("Details not entered.")
        user = None
        # if the email has been passed
        if '@' in user_id:
            user = User.objects.filter(
                Q(email=user_id) &
                Q(password=password)
                ).distinct()
            if not user.exists():
                raise ValidationError("User credentials are not correct.")
            user = User.objects.get(email=user_id)
        else:
            user = User.objects.filter(
                Q(username=user_id) &
                Q(password=password)
            ).distinct()
            if not user.exists():
                raise ValidationError("User credentials are not correct.")
            user = User.objects.get(username=user_id)
        if user.ifLogged:
            raise ValidationError("User already logged in.")
        user.save()
        return data

    class Meta:
        model = User
        fields = (
            'user_id',
            'password',

        )


class UserLogoutSerializer(serializers.ModelSerializer):
    token = serializers.CharField()
    status = serializers.CharField(required=False, read_only=True)

    def validate(self, data):
        token = data.get("token", None)
        print(token)
        user = None
        try:
            user = User.objects.get(token=token)
            if not user.ifLogged:
                raise ValidationError("User is not logged in.")
        except Exception as e:
            raise ValidationError(str(e))
        user.ifLogged = False
        user.token = ""
        user.save()
        data['status'] = "User is logged out."
        return data

    class Meta:
        model = User
        fields = (
            'token',
            'status',
        )
