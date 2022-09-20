from dataclasses import field
from rest_framework import serializers
from .models import * 
from django.contrib.auth.models import User

## Serializer is a component that converts
## Django models to JSON objects and vice versa


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ('caseId', 'date', 'fName', 'lName', 'creditScore', 'email', 'phone_num', 'status')
        
class AddLead(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ('caseId', 'date', 'fName', 'lName', 'creditScore', 'email', 'phone_num', 'status')


class BorrowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Borrower
        fields = '__all__'


class LoanProcessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class LoanOfficerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

class ClientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = ('cid', 'fname', 'lname', 'email', 'phone_num')

class AddClient(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = ('fname', 'lname', 'email', 'phone_num')

class RecentBorrowerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RecentBorrowers
        fields = ('date', 'fname', 'lname')
