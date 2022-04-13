from dataclasses import field
from rest_framework import serializers
from .models import  Client, User

## Serializer is a component that converts
## Django modles to JSON objects and vice versa

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('cid', 'fname', 'lname', 'email', 'phone_num')

class AddClient(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('fname', 'lname', 'email', 'phone_num')
