from datetime import date
import re
from urllib import response
from django.shortcuts import render
from rest_framework import generics, status
import random
from rest_framework import viewsets
from rest_framework import filters
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import permissions 
from django.contrib.auth.mixins import PermissionRequiredMixin

from .serializers import AddLead, ClientSerializer, AddClient, AddBorrower, UserProfileSerializer,LeadSerializer, BorrowerSerializer,  LenderSerializer, AnnoucementsSerializer,LenderLogoSerializer,BioSerializer,BiographySerializer, ResourcesSerializer, AddResources, RecycleBinSerializer,BorrowerNoteSerializer,LeadNoteSerializer
from .models import Client, UserProfile, Lead, Borrower, Lender,Annoucements,LenderLogo, Bio, Resources, RecyclingBin,BorrowerNote,LeadNote

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
            video = serializer.data.get('video')

            resource = Resources(media=media,files=files,announcements=announcements,news=news,id=id,name=name,video=video)
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
    search_fields = ['company', 'programs']

class LenderView(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    queryset = Lender.objects.all()
    serializer_class= LenderSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['company', 'programs']

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

def generate_random_number():
    cID = random.randrange(1000000)
    return cID

@api_view(['DELETE'])
def borrowerDelete(request, pk):
    borrower = Borrower.objects.get(caseId=pk)
    name = "Borrower"
    caseID = borrower.caseId
    date = borrower.date
    fname = borrower.fName
    lname = borrower.lName
    creditscore = borrower.creditScore
    email = borrower.email
    phone_num = borrower.phone_num
    status = borrower.status

    borrowerBin = RecyclingBin(name,generate_random_number(),None,caseID,date,fname,lname,creditscore,email,phone_num,status)
    borrowerBin.save()
    borrower.delete()
    
    return Response("Moved to Bin!")

@api_view(['DELETE'])
def leadDelete(request, pk):
    lead = Lead.objects.get(caseId=pk)
    name = "Lead"
    resources = lead.resources
    caseID = lead.caseId
    date = lead.date
    fname = lead.fName
    lname = lead.lName
    creditscore = lead.creditScore
    email = lead.email
    phone_num = lead.phone_num
    status = lead.status

    leadBin = RecyclingBin(name,generate_random_number(),resources,caseID,date,fname,lname,creditscore,email,phone_num,status)
    leadBin.save()
    lead.delete()
    
    return Response("Moved to Bin!")

@api_view(['POST'])
def borrowerRecover(request, pk):
    borrower = RecyclingBin.objects.get(trashID=pk)
    if borrower.dataName == "Borrower":
        caseID = borrower.caseId
        date = borrower.date
        fname = borrower.fName
        lname = borrower.lName
        creditscore = borrower.creditScore
        email = borrower.email
        phone_num = borrower.phone_num
        status = borrower.status

        borrowerRestore = Borrower(caseID,date,fname,lname,creditscore,email,phone_num,status)
        borrowerRestore.save()
        borrower.delete()
        return Response("Borrower Data Recovered")
    else:
        return Response("Not a Borrower")

@api_view(['POST'])
def leadRecover(request, pk):
    lead = RecyclingBin.objects.get(trashID=pk)
    if lead.dataName == "Lead":
        resources = lead.resources
        caseID = lead.caseId
        date = lead.date
        fname = lead.fName
        lname = lead.lName
        creditscore = lead.creditScore
        email = lead.email
        phone_num = lead.phone_num
        status = lead.status

        leadRestore = Lead(resources,caseID,date,fname,lname,creditscore,email,phone_num,status)
        leadRestore.save()
        lead.delete()
        return Response("Lead Data Recovered")
    else:
        return Response("Not a Lead")

@api_view(['DELETE'])
def binDelete(request, pk):
    permission_classes = (permissions.IsAuthenticated, )
    dataBin = RecyclingBin.objects.get(trashID=pk)
    dataBin.delete()
    
    return Response("Data Successfully Deleted!")

class RecyclingBinViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=RecyclingBin.objects.all()
    serializer_class= RecycleBinSerializer

class RecyclingBinView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = RecyclingBin.objects.all()
    serializer_class=  RecycleBinSerializer
    
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




@api_view(['GET'])
def borrowerNoteList(request):
    borrowernote = BorrowerNote.objects.all()
    serializer = BorrowerNoteSerializer(borrowernote, many=True)
    return Response(serializer.data)
@api_view(['POST'])
def borrowerNoteCreate(request):
    serializer = BorrowerNoteSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['POST'])
def borrowerNoteUpdate(request, pk):
    borrowernote = BorrowerNote.objects.get(id=pk)
    serializer = BorrowerNoteSerializer(instance=borrowernote, data=request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
def borrowerNoteDelete(request, pk):
    borrowernote = BorrowerNote.objects.get(id=pk)
    borrowernote.delete()
    
    return Response("Successfully Deleted BorrowerNote!")
class borrowerNoteViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=BorrowerNote.objects.all()
    serializer_class=BorrowerNoteSerializer

class BorrowerNoteView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = BorrowerNote.objects.all()
    serializer_class= BorrowerNoteSerializer



@api_view(['GET'])
def LeadNoteList(request):
    leadnote = LeadNote.objects.all()
    serializer = LeadNoteSerializer(leadnote, many=True)
    return Response(serializer.data)
@api_view(['POST'])
def LeadNoteCreate(request):
    serializer = LeadNoteSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['POST'])
def LeadNoteUpdate(request, pk):
    leadnote = LeadNote.objects.get(id=pk)
    serializer = BorrowerNoteSerializer(instance=leadnote, data=request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
def LeadNoteDelete(request, pk):
    leadnote = LeadNote.objects.get(id=pk)
    leadnote.delete()
    
    return Response("Successfully Deleted BorrowerNote!")
class LeadNoteViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=LeadNote.objects.all()
    serializer_class=LeadNoteSerializer

class LeadNoteView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = LeadNote.objects.all()
    serializer_class= LeadNoteSerializer


