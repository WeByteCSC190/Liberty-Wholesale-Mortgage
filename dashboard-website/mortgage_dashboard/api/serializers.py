from dataclasses import field
from rest_framework import serializers
from .models import * 
from django.contrib.auth.models import User

## Serializer is a component that converts
## Django models to JSON objects and vice versa

class AnnouncementsSerializer(serializers.HyperlinkedModelSerializer):
      class Meta:
          model= Announcements
          fields=('date','content')
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields='__all__'

class BorrowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Borrower
        fields = '__all__'

# class AccountDetailSerializer(serializers.ModelSerializer):
#     class Meta:
#         model= AccountDetail
#         fields = '__all__'

class LoanProcessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ResourcesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Resources
        fields = '__all__'

class LoanOfficerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ClientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = ('cID', 'fName', 'lName', 'email', 'phone_num')

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
        fields= '__all__'
