from dataclasses import field
from rest_framework import serializers
from .models import *

## Serializer is a component that converts
## Django models to JSON objects and vice versa


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class BorrowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class LoanProcessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class LoanOfficerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

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
