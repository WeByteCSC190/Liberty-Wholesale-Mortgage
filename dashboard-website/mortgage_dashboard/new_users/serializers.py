from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from rest_framework import serializers
from django.contrib.auth import get_user_model
User = get_user_model()


class UserCreateSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    # fields= '__all__'
    # fields = ('username', 'password', 'uId', 'fName', 'lName', 'nmlsID', 'ssn')
    fields = ('fName', 'lName', 'username', 'password')

  def validate(self, data):
    user = User(**data)
    password = data.get('password')

    try:
      validate_password(password, user)
    except exceptions.ValidationError as e:
      serializer_errors = serializers.as_serializer_error(e)
      raise exceptions.ValidationError(
        {'password': serializer_errors['non_field_errors']}
      )

    return data


  def create(self, validated_data):
    user = User.objects.create_user(
      username=validated_data['username'],
      fName=validated_data['fName'],
      lName=validated_data['lName'],
      # email=validated_data['email'],
      password=validated_data['password'],
    )

    return user


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('fName', 'lName', 'username','password')
    # fields = ('username', 'password', 'uId', 'fName', 'lName', 'nmlsID', 'ssn')
    # fields='__all__'
