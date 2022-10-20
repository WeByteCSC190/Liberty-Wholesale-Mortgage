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
from django.contrib.auth.mixins import PermissionRequiredMixin

from .serializers import AddLead, ClientSerializer, AddClient, AddBorrower, UserProfileSerializer,LeadSerializer, BorrowerSerializer,  LenderSerializer, AnnoucementsSerializer,LenderLogoSerializer,BioSerializer,BiographySerializer, ResourcesSerializer, AddResources
from .models import Client, UserProfile, Lead, Borrower, Lender,Annoucements,LenderLogo, Bio, Resources

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

class ResourceView(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset = Resources.objects.all()
    serializer_class= ResourcesSerializer

class AddResourceView(APIView):
    serializer_class = AddResources
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            media = serializer.data.get('media')
            files = serializer.data.get('files')
            announcements = serializer.data.get('announcements')
            news = serializer.data.get('news')
            id = serializer.data.get('id')
            name = serializer.data.get('name')


            resource = Resources(media=media,files=files,announcements=announcements,news=news,id=id,name=name)
            resource.save()
            
            return Response(ResourcesSerializer(resource).data, status=status.HTTP_200_OK)

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
    queryset=Borrower.objects.all().order_by('-date')[:3]
    recent_three_borrowers=reversed(queryset)
    serializer_class=BorrowerSerializer

class LenderViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    queryset=Lender.objects.all()
    serializer_class=LenderSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['company', 'state', 'programs']

class LenderView(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    queryset = Lender.objects.all()
    serializer_class= LenderSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['company', 'state', 'programs']

class LenderLogoViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=LenderLogo.objects.all()
    serializer_class=LenderLogoSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['company']

class LenderLogoView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = LenderLogo.objects.all()
    serializer_class= LenderLogoSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['company']

class RecentLeadsViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=Lead.objects.all().order_by('-date')[:3]
    recent_three_leads=reversed(queryset)
    serializer_class=LeadSerializer

class AnnoucementsViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=Annoucements.objects.all()
    serializer_class=AnnoucementsSerializer

class ImportantAnnoucementsViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=Annoucements.objects.all().order_by('-date')
    recent_three_leads=reversed(queryset)
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
    serializer_class=BorrowerSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['Date', 'First Name', 'Last Name', 'Status']

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

class BioViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=Bio.objects.all()
    serializer_class=BioSerializer

class BioView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Bio.objects.all()
    serializer_class= BioSerializer

@api_view(['GET'])
def bioList(request):
    bio = Bio.objects.all()
    serializer = BiographySerializer(bio, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def bioDetail(request, pk):
    bio = Bio.objects.get(id=pk)
    serializer = BiographySerializer(bio, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def bioCreate(request):
    serializer = BiographySerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['POST'])
def bioUpdate(request, pk):
    bio = Bio.objects.get(id=pk)
    serializer = BiographySerializer(instance=bio, data=request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
def bioDelete(request, pk):
    bio = Bio.objects.get(id=pk)
    bio.delete()
    
    return Response("Successfully Deleted!")

# def BorrowerSearch(request):
#     if request.method =="POST":
#         searched = request.POST('searched')
#     borrower = Borrower.objects.filter(id__contains = searched)
#     return render(request, ','{'searched':searched, borrower = Borrower})
#     else:
#         return render(request, ,{})

# def BorrowerEditCheckBox(request):
#     if request.method =="POST":
#         status_list = request.POST.getlist('boxes')

#         for x in status_list:
#             Event.object.filter(pk=int(x)),update(Approved = True)