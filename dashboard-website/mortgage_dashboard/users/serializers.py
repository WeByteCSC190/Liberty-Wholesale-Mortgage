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
    # fields = ('fName', 'lName', 'username', 'password')
    fields = ('username', 'password')

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
      password=validated_data['password'],
    )

    return user


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    # fields = ('fName', 'lName', 'username','password')
    # fields = ('username', 'password', 'uId', 'fName', 'lName', 'nmlsID', 'ssn')
    fields='__all__'



class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'fName', 'lName', 'uID', 'nmlsID', 'ssn', 'address_1', 'address_2', 'zip_code', 'role')
        extra_kwargs = {
            'fName': {'required': True},
            'lName': {'required': True},
        }

    def validate_username(self, value):
        user = self.context['request'].user
        if User.objects.exclude(pk=user.pk).filter(username=value).exists():
            raise serializers.ValidationError({"username": "This username is already in use."})
        return value

    def update(self, instance, validated_data):
        user = self.context['request'].user

        if user.pk != instance.pk:
            raise serializers.ValidationError({"authorize": "You dont have permission for this user."})

        instance.fName = validated_data['fName']
        instance.lName = validated_data['lName']
        # instance.username = validated_data['username']
        instance.uID = validated_data['uID']
        instance.nmlsID = validated_data['nmlsID']
        instance.ssn = validated_data['ssn']
        instance.address_1 = validated_data['address_1']
        instance.address_2 = validated_data['address_2']
        instance.zip_code = validated_data['zip_code']

        instance.save()

        return instance

    # def update(self, instance, validated_data):

    #     user = self.context['request'].user

    #     if user.pk != instance.pk:
    #         raise serializers.ValidationError({"authorize": "You dont have permission for this user."})

    #     # instance.set_password(validated_data['password'])
    #     instance.save()

    #     return instance
    
    # def update(self, instance, validated_data):
    #     instance.fName = validated_data['fName']
    #     instance.lName = validated_data['lName']
    #     instance.username = validated_data['username']

    #     instance.save()

    #     return instance
