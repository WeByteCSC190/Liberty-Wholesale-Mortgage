from datetime import date
import re
from urllib import response
from django.shortcuts import render, redirect
from rest_framework import generics, status
import random
from rest_framework import viewsets
from rest_framework import filters
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action

from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import permissions 
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.core import serializers
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from new_users.models import CustomUser
from new_users.serializers import UserSerializer

from .models import Client, Lead, Borrower, Lender,Announcements,LenderLogo, Bio, Resources, RecyclingBin,BorrowerNote,LeadNote
from .serializers import ClientSerializer, LeadSerializer, BorrowerSerializer,  LenderSerializer, AnnouncementsSerializer,LenderLogoSerializer,BioSerializer,BiographySerializer, ResourcesSerializer, RecycleBinSerializer,BorrowerNoteSerializer,LeadNoteSerializer

# @api_view(['GET'])
# def listAll(request):
#     serializer = UserSerializer(users, many = True)
#     return Response(serializer.data)
#
#     users = CustomUser.objects.all()
#
@api_view(['GET'])
def userDetail(request,pk):
    user = CustomUser.objects.get(id = pk)
    serializer = UserSerializer(user, many = True)
    return Response(serializer.data)

class ResourceView(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, )
    queryset = Resources.objects.all()
    serializer_class= ResourcesSerializer

class ClientView(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class= ClientSerializer

# class AddClientView(APIView):
#     serializer_class = AddClient
#     def post(self, request, format=None):
#         if not self.request.session.exists(self.request.session.session_key):
#             self.request.session.create()
#
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             fName = serializer.data.get('fName')
#             lName = serializer.data.get('lName')
#             email = serializer.data.get('email')
#             phone_num = serializer.data.get('phone_num')
#
#             client = Client(fName=fName,lName=lName, email=email, phone_num=phone_num)
#             client.save()
#             
#             return Response(ClientSerializer(client).data, status=status.HTTP_200_OK)
#

class LenderView(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    queryset = Lender.objects.all()
    serializer_class= LenderSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['company', 'programs']

class LenderLogoView(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset = LenderLogo.objects.all()
    serializer_class= LenderLogoSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['company']

class AnnouncementsView(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, )
    queryset = Announcements.objects.all()
    serializer_class=AnnouncementsSerializer


class LeadView(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, )
    queryset = Lead.objects.all()
    serializer_class= LeadSerializer

    @action(methods=['GET'], detail=False, url_path='recent')
    def recent_leads(self, request):
        queryset=Lead.objects.all().order_by('-date')[:3];
        recent_three = reversed(queryset)
        serializer = LeadSerializer(recent_three, many=True)
        return HttpResponse(serializer.data, content_type="application/json")

class BorrowerView(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, )
    queryset = Borrower.objects.all()
    serializer_class=BorrowerSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['Date', 'First Name', 'Last Name', 'Status']

    @action(methods=['GET'], detail=False, url_path='recent')
    def recent_borrowers(self, request):
        queryset=Borrower.objects.all().order_by('-date')[:3];
        recent_three = reversed(queryset)
        serializer = BorrowerSerializer(recent_three, many=True)
        return HttpResponse(serializer.data, content_type="application/json")

class BioView(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, )
    queryset = Bio.objects.all()
    serializer_class= BioSerializer

@api_view(['POST'])
def bioUpdate(request, pk):
    bio = Bio.objects.get(id=pk)
    serializer = BiographySerializer(instance=bio, data=request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

class RecyclingBinView(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticated, )
    queryset = RecyclingBin.objects.all()
    serializer_class=  RecycleBinSerializer

class BorrowerNoteView(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, )
    queryset = BorrowerNote.objects.all()
    serializer_class= BorrowerNoteSerializer

class LeadNoteView(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, )
    queryset = LeadNote.objects.all()
    serializer_class = LeadNoteSerializer

# class AccountDetailView(viewsets.ModelViewSet):
#     permission_classes = (permissions.AllowAny, )
#     queryset = AccountDetails.objects.all()
#     serializer_class = AccountDetails();

# @api_view(['POST'])
# def updateAccountDetail(request,pk):
#     detail = AccountDetail.objects.get(id=pk)
#     serializer = AccountDetails(instance = detail, data=request.data)
#
#     if serializer.is_valid():
#         serializer.save()
#
#     return Response(serializer.data)
#
# @api_view(['POST'])
# def createAccountDetail(request):
#     serializer= AccountDetails(data=request.data)
#     
#     if serializer.is_valid():
#         serializer.save()
#
#     return Response(serializer.data)
#
# @api_view(['DELETE'])
# def delAccountDetail(request,pk):
#     detail = AccountDetails.objects.get(id=pk)
#     detail.delete()
#     return Response('Account Details has been successfully deleted!')
