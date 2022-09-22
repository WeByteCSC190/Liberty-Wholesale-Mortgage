from dataclasses import field
from rest_framework import serializers
from .models import * 

## Serializer is a component that converts
## Django models to JSON objects and vice versa

class AnnoucementsSerializer(serializers.HyperlinkedModelSerializer):
      class Meta:
          model= Annoucements
          fields=('date','content')
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ('caseId', 'date', 'fName', 'lName', 'creditScore', 'email', 'phone_num', 'status')
        
class AddLead(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ('caseId', 'date', 'fName', 'lName', 'creditScore', 'email', 'phone_num', 'status')

class AddBorrower(serializers.ModelSerializer):
    class Meta:
        model = Borrower
        fields = ('caseId', 'date', 'fName', 'lName', 'creditScore', 'email', 'phone_num', 'status')
        
class BorrowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Borrower
        fields = '__all__'


class LoanProcessorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class LoanOfficerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
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
class RecentLeadsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= RecentLeads
        fields =('date','fname','lname')

class LenderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= Lender
        fields =('company', 'state', 'rating', 'programs')