from dataclasses import field
from rest_framework import serializers
from .models import * 
from django.contrib.auth.models import User

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


class LoanProcessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ResourcesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resources
        fields = '__all__'

class AddResources(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Resources
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
        fields = ('cID', 'fName', 'lName', 'email', 'phone_num')

class AddClient(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = ('fName', 'lName', 'email', 'phone_num')

class LenderSerializer(serializers.ModelSerializer):
    class Meta:
        model= Lender
        fields = '__all__'

class LenderLogoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = LenderLogo
        fields = '__all__'

class BioSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Bio
        fields = '__all__'

class BiographySerializer(serializers.ModelSerializer):
    class Meta:
        model = Bio
        fields = '__all__'

class RecycleBinSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecyclingBin
        fields = '__all__'
class BorrowerNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model=BorrowerNote
        fields=('__all__')
class LeadNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model= LeadNote
        fields=('__all__')
class AccountDetails(serializers.ModelSerializer):
    class Meta:
        model = AccountDetail
        fields = ('__all__')
class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model=Status
        fields=('__all__')
class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Video
        fields=('__all__')