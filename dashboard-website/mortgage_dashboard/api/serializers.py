from rest_framework import serializers
from .models import  Client

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('cid', 'fname', 'lname', 'email', 'phone_num')

class AddClient(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('fname', 'lname', 'email', 'phone_num')
