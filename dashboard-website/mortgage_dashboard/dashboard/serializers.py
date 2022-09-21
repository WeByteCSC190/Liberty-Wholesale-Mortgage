from dataclasses import field
from rest_framework import serializers
from .models import * 

class RecentBorrowerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RecentBorrowers
        fields = ('date', 'fname', 'lname')
class RecentLeadsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= RecentLeads
        fields =('date','fname','lname')