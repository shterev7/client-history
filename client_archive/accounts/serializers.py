from builtins import dict, list, super, staticmethod

from rest_framework import serializers
from rest_framework import exceptions
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
import django.contrib.auth.password_validation as validators
from rest_framework.exceptions import ValidationError
from rest_framework.validators import UniqueValidator


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class RegisterSerializer(serializers.ModelSerializer):
    # email = serializers.EmailField(validators=[UniqueValidator(queryset=User.objects.all())])
    # class Meta:
    #   model = User
    #   fields = ('id', 'username', 'email', 'password')
    #   extra_kwargs = {
    #       'password': {'write_only': True},
    #       }

    password = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    # email = serializers.EmailField(validators=[UniqueValidator(queryset=User.objects.all())])

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')

        # extra_kwargs = {k: {'write_only': True} for k in fields}

    def validate_email(self, value):
        norm_email = value.lower()
        if User.objects.filter(email=norm_email).exists():
            raise serializers.ValidationError("A user with that e-mail already exists.")
        return norm_email

    def validate(self, data):
        user = User(**data)

        password = data.get('password')

        errors = dict()
        try:
            validators.validate_password(password=password, user=User)

        except exceptions.ValidationError as e:
            errors['password'] = list(e.messages)

        if errors:
            raise serializers.ValidationError(errors)

        return super(RegisterSerializer, self).validate(data)



    # def create(self, validated_data):
    #     user = User.objects.create_user(**validated_data)
    #     user.is_active = False
    #     user.save()
    #     return user

    def create(self, validated_data):
      user = User.objects.create_user(**validated_data)

      return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
