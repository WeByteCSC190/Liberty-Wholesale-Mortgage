from datetime import date
import re
from urllib import response
from django.shortcuts import render
from rest_framework import generics, status

from rest_framework import viewsets
from rest_framework import filters
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import permissions 


from .serializers import AddLead, ClientSerializer, AddClient, RecentLeadsSerializer, AddBorrower, UserProfileSerializer,LeadSerializer, BorrowerSerializer, RecentBorrowerSerializer, LenderSerializer, AnnoucementsSerializer
from .models import Client, RecentLeads, UserProfile, Lead, Borrower, RecentBorrowers,RecentLeads, Lender,Annoucements

# Create your views here.

## These are a couple of bad samples of what 
## the api endpoint functions should look like
## The below listed github repo has better examples
## https://github.com/techwithtim/Music-Controller-Web-App-Tutorial/blob/main/Tutorial%2017/api/views.py
## I have Mock Data in this folder, I need someone to
## populate our database with that, or perhaps it 
## would be easier to just directly use that
## After the Mock Data is in a useable format
## Create the API endpoints for getting all 
## entries in leads table and borrowers table 
## They should return JSON data 
## Afterwards think of any other endpoints that
## can be made and add them or list them
## as tasks on the Github

# @api_view(['GET'])
# def apiView(request):
#     apiUrls = {
#         'List': '/userList',
#         'Detail View':'/userDetails/<int: id>',
#         'Create': '/userCreate',
#         'Update': '/userUpdate/<int: id>',
#         'Delete': '/userDelete/<int: id>',
#     }
#     return Response(apiUrls)

@api_view(['GET'])
def listAll(request):
    users = UserProfile.objects.all()
    serializer = UserProfileSerializer(users, many = True)
    
    return Response(serializer.data)

@api_view(['GET'])
def userDetail(request,pk):
    user = UserProfile.objects.get(id = pk)
    serializer = UserProfileSerializer(user, many = False)
    return Response(serializer.data)

@api_view(['POST'])
def createUser(request):
    serializer = UserProfileSerializer(data = request.data)
    
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def updateUser(request,pk):
    user = UserProfile.objects.get(id = pk)
    serializer = UserProfileSerializer(instance=user, data=request.data)
    
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteUser(request,pk):
    user = UserProfile.objects.get(id = pk)
    user.delete()
    return Response('Item deleted')


    
########

class ClientView(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_class= ClientSerializer

class AddClientView(APIView):
    serializer_class = AddClient
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            fName = serializer.data.get('fName')
            lName = serializer.data.get('lName')
            email = serializer.data.get('email')
            phone_num = serializer.data.get('phone_num')

            client = Client(fName=fName,lName=lName, email=email, phone_num=phone_num)
            client.save()
            
            return Response(ClientSerializer(client).data, status=status.HTTP_200_OK)

class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=Lead.objects.all()
    serializer_class=LeadSerializer

class BorrowerViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=Borrower.objects.all()
    serializer_class=BorrowerSerializer

class RecentBorrowerViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=RecentBorrowers.objects.all()[:3]
    serializer_class=RecentBorrowerSerializer

class LenderViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=Lender.objects.all()
    serializer_class=LenderSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['company', 'state', 'programs']

class LenderView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Lender.objects.all()
    serializer_class= LenderSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['company', 'state', 'programs']

class RecentLeadsViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=RecentLeads.objects.all()[:3]
    serializer_class=RecentLeadsSerializer

class AnnoucementsViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=Annoucements.objects.all()
    serializer_class=AnnoucementsSerializer

class LeadView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Lead.objects.all()
    serializer_class= ClientSerializer

class addLeadView(APIView):
    serializer_class = AddLead
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            caseId = serializer.data.get('caseId')
            date = serializer.data.get('Date')
            fName = serializer.data.get('fName')
            lName = serializer.data.get('lName')
            creditScore = serializer.data.get('creditScore')
            email = serializer.data.get('email')
            phone_num = serializer.data.get('phone_num')
            status = serializer.data.get('status')

            lead = Lead(caseId=caseId,date=date,fName=fName,lName=lName,creditScore=creditScore,email=email,phone_num=phone_num,status=status)
            lead.save()

            return Response(LeadSerializer(lead).data, status=status.HTTP_200_OK)

class BorrowerView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Borrower.objects.all()
    serializer_class= ClientSerializer

class AddBorrower(APIView):
    serializer_class = AddBorrower
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            caseId = serializer.data.get('caseId')
            date = serializer.data.get('Date')
            fName = serializer.data.get('fName')
            lName = serializer.data.get('lName')
            creditScore = serializer.data.get('creditScore')
            email = serializer.data.get('email')
            phone_num = serializer.data.get('phone_num')
            status = serializer.data.get('status')

            borrower = Borrower(caseId=caseId,date=date,fName=fName,lName=lName,creditScore=creditScore,email=email,phone_num=phone_num,status=status)
            borrower.save()

            return Response(BorrowerSerializer(Borrower).data, status=status.HTTP_200_OK)

def BorrowerSearch(request):
    if request.method =="POST":
        searched = request.POST('searched')
    borrower = Borrower.objects.filter(id__contains = searched)
    return render(request, ','{'searched':searched, borrower = Borrower})
    else:
        return render(request, ,{})

def BorrowerEditCheckBox(request):
    if request.method =="POST":
        status_list = request.POST.getlist('boxes')

        for x in status_list:
            Event.object.filter(pk=int(x)),update(Approved = True)