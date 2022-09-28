from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse
from rest_framework import viewsets
from .models import RecentBorrowers,RecentLeads
from .serializers import RecentBorrowerSerializer,RecentLeadsSerializer
from datetime import date
import re
from urllib import response
from rest_framework import generics, status

from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import RecentBorrowers

# Create your views here.

def dashboard(request):
    return HttpResponse("<h1>Hello</h1>")

class RecentBorrowerViewSet(viewsets.ModelViewSet):
    queryset=RecentBorrowers.objects.all()
    serializer_class=RecentBorrowerSerializer

class RecentLeadsViewSet(viewsets.ModelViewSet):
    queryset=RecentLeads.objects.all()
    serializer_class=RecentLeadsSerializer




    
