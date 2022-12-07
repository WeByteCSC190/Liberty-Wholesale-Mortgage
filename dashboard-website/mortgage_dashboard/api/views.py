from datetime import date
from pickle import FALSE
import re
from tkinter import Image
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
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from .serializers import *
from .models import *
from users.serializers import UserSerializer
from rest_framework.parsers import JSONParser

# @api_view(['GET'])
# def listAll(request):
#     users = UserProfile.objects.all()
#     serializer = UserProfileSerializer(users, many = True)
#
#     return Response(serializer.data)

# class ResourceViewSet(viewsets.ModelViewSet):
#     permission_classes = (permissions.AllowAny, )
#     queryset = Resources.objects.all()
#     serializer_class= ResourcesSerializer

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class= ClientSerializer

class FileViewSet(viewsets.ModelViewSet):
    permission_classes=(permissions.AllowAny, )
    queryset=Files.objects.all()
    serializer_class=FilesSerializer

class StatusViewSet(viewsets.ModelViewSet):
    permission_classes=(permissions.AllowAny, )
    queryset=Status.objects.all()
    serializer_class=StatusSerializer


class LenderViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    queryset=Lender.objects.all()
    serializer_class=LenderSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['company', 'programs']

    @action(methods=['GET'], detail=False, url_path='total')
    def total_lenders(self, request):
        queryset=Lender.objects.all();
        total_count = queryset.count();
        return JsonResponse(total_count, content_type="application/json", safe=False)

class LenderLogoViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=LenderLogo.objects.all()
    serializer_class=LenderLogoSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['company']

class ArticlesViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=Articles.objects.all()
    serializer_class=ArticlesSerializer

class ImportantArticlesViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=Articles.objects.all().order_by('-date')
    recent_three_leads=reversed(queryset)
    serializer_class=ArticlesSerializer

class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset = Lead.objects.all()
    serializer_class= LeadSerializer

    @action(methods=['GET'], detail=False, url_path='recent')
    def recent_leads(self, request):
        queryset=Lead.objects.all().order_by('-date')[:4];
        recent_three = reversed(queryset)
        serializer = LeadSerializer(recent_three, many=True)
        return JsonResponse(serializer.data, content_type="application/json", safe=False)

    @action(methods=['GET'], detail=False, url_path='total')
    def total_leads(self, request):
        queryset=Lead.objects.all();
        total_count = queryset.count();
        return JsonResponse(total_count, content_type="application/json", safe=False)

    # def destroy(self, request, pk):
    #     lead = Lead.objects.get(caseId=pk)
    #     name = "Lead"
    #     caseID = lead.caseId
    #     date = lead.date
    #     fname = lead.fName
    #     lname = lead.lName
    #     creditscore = lead.creditScore
    #     email = lead.email
    #     phone_num = lead.phone_num
    #     status = lead.status
    #     leadBin = RecyclingBin(name,None, None,caseID,date,fname,lname,creditscore,email,phone_num, status)
    #     leadBin.save()
    #     lead.delete()
    #     return Response("Moved to Bin!")


class BorrowerViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset = Borrower.objects.all()
    serializer_class=BorrowerSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['Date', 'First Name', 'Last Name', 'Status']

    @action(methods=['GET'], detail=False, url_path='recent')
    def recent_borrowers(self, request):
        queryset=Borrower.objects.all().order_by('-date')[:4];
        recent_three = reversed(queryset)
        serializer = LeadSerializer(recent_three, many=True)
        return JsonResponse(serializer.data, content_type="application/json", safe=False)

    @action(methods=['GET'], detail=False, url_path='total')
    def total_borrowers(self, request):
        queryset=Borrower.objects.all();
        total_count = queryset.count();
        return JsonResponse(total_count, content_type="application/json", safe=False)



    # def destroy(self, request, pk):
    #     borrower = Borrower.objects.get(caseId=pk)
    #     name = "borrower"
    #     caseID = borrower.caseId
    #     date = borrower.date
    #     fname = borrower.fName
    #     lname = borrower.lName
    #     creditscore = borrower.creditScore
    #     email = borrower.email
    #     phone_num = borrower.phone_num
    #     status = borrower.status
    #     borrowerBin = RecyclingBin(name,None, None,caseID,date,fname,lname,creditscore,email,phone_num)
    #     borrowerBin.save()
    #     borrower.delete()
    #     return Response("Moved to Bin!")


class BorrowerNoteViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset = BorrowerNote.objects.all()
    serializer_class= BorrowerNoteSerializer

class LeadNoteViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset = LeadNote.objects.all()
    serializer_class = LeadNoteSerializer

class BioViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=Bio.objects.all()
    serializer_class=BioSerializer

def generate_random_number():
    cID = random.randrange(1000000)
    return cID

class BorrowerRecover(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, pk):
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

class LeadRecover(APIView):
    permission_classes = (permissions.AllowAny, )
    
    def post(self, request, pk):
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

class RecyclingBinViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset=RecyclingBin.objects.all()
    serializer_class= RecycleBinSerializer

# class UserProfileViewSet(APIView):
#     permission_classes = (permissions.IsAuthenticated, )
#     serializer_class=UserProfileSerializer

#     def list(self, request):
#         profile = UserProfile.objects.get(user=request.user)
#         serializer = UserProfileSerializer(profile, context={'user': request.user.profile})
#         return Response(serializer.data, status=status.HTTP_200_OK)


#     def post(self, request, format=None):
#         serializer = UserProfileSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response ({ 'msg':'Data Updated Successfully'},status=status.HTTP_201_CREATED 
#     )

#     def put(self, request, format=None):
#         serializer = UserProfileSerializer(data=request.data, partial=True, context={'user': request.user.profile})

#         serializer.is_valid(raise_exception=True)
#         serializer.save()

#         return Response({'msg':'Profile Succeded'}, status= status.HTTP_200_OK)


# @api_view(['POST'])
# def updateAccountDetail(request,pk):
#     detail = AccountDetail.objects.get(id=pk)
#     serializer = AccountDetails(instance = detail, data=request.data)
#
#     if serializer.is_valid():
#         serializer.save()
#
#     return Response(serializer.data)

# @api_view(['POST'])
# def createAccountDetail(request):
#     serializer= AccountDetails(data=request.data)
#     
#     if serializer.is_valid():
#         serializer.save()
#
#     return Response(serializer.data)

# @api_view(['DELETE'])
# def delAccountDetail(request,pk):     detail = AccountDetails.objects.get(id=pk)
#     detail.delete()
#     return Response('Account Details has been successfully deleted!')
#
# @api_view(['POST'])
# def updateAccount(request,pk):
#     user = UserProfile.objects.get(id = pk)
#     serializer = UserProfileSerializer(instance=user, data=request.data)
#     
#     if serializer.is_valid():
#         serializer.save()
#
#     return Response(serializer.data)
#


####  Video API
class VideoViewSet(viewsets.ModelViewSet):
    permission_classes=(permissions.AllowAny, )
    queryset=Video.objects.all()
    serializer_class=VideoSerializer

#### Images API
class ImageViewSet(viewsets.ModelViewSet):
    queryset=Images.objects.all()
    serializer_class=ImagesSerializer

#Alternative resource Api 
# @api_view(['GET', 'POST', 'DELETE'])
# def resource_list(request):
#     if request.method == 'GET':
#         resources = Resources.objects.all()
#         
#         name = request.query_params.get('name', None)
#         if name is not None:
#             resources = Resources.filter(name__icontains=name)
#         
#         resources_serializer = ResourcesSerializer(resources, many=True)
#         return Response(resources_serializer.data)
#        
#  
#     elif request.method == 'POST':
#         resources_serializer = ResourcesSerializer(data=request.data)
#         if resources_serializer.is_valid():
#             resources_serializer.save()
#             return Response(resources_serializer.data, status=status.HTTP_201_CREATED) 
#         return Response(resources_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     
#     elif request.method == 'DELETE':
#         count = Resources.objects.all().delete()
#         return Response({'message': '{} Resources were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

# #BorrowerNote API
# @api_view(['GET', 'POST', 'DELETE'])
# def borrowernote_list(request):
#     if request.method == 'GET':
#         borrowernote = BorrowerNote.objects.all()
#         
#         name = request.query_params.get('name', None)
#         if name is not None:
#             borrowernote = BorrowerNote.filter(name__icontains=name)
#         
#         borrowernote_serializer = BorrowerNoteSerializer(borrowernote, many=True)
#         return Response(borrowernote_serializer.data)
#        
#  
#     elif request.method == 'POST':
#         borrowernote_serializer = BorrowerSerializer(data=request.data)
#         if borrowernote_serializer.is_valid():
#             borrowernote_serializer.save()
#             return Response(borrowernote_serializer.data, status=status.HTTP_201_CREATED) 
#         return Response(borrowernote_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     
#     elif request.method == 'DELETE':
#         count = BorrowerNote.objects.all().delete()
#         return Response({'message': '{} BorrowerNote were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
#
# @api_view(['GET', 'PUT', 'DELETE'])
# def borrowernote_detail(request, pk):
#     try: 
#         borrowernote = BorrowerNote.objects.get(pk=pk) 
#     except BorrowerNote.DoesNotExist: 
#         return Response({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND) 
#  
#     if request.method == 'GET': 
#         borrowernote_serializer = BorrowerNoteSerializer(borrowernote) 
#         return Response(borrowernote_serializer.data) 
#  
#     elif request.method == 'PUT': 
#         borrowernote = BorrowerNote.objects.get(pk=pk) 
#         borrowernote_serializer = BorrowerNoteSerializer(instance=borrowernote, data=request.data) 
#         if borrowernote_serializer.is_valid(): 
#             borrowernote_serializer.save() 
#             return Response(borrowernote_serializer.data) 
#         return Response(borrowernote_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
#  
#     elif request.method == 'DELETE': 
#         borrowernote.delete() 
#         return Response({'message': 'BorrowerNote was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
#
#
# # LeadNote API
#
# @api_view(['GET', 'POST', 'DELETE'])
# def leadnote_list(request):
#     if request.method == 'GET':
#         leadnote = LeadNote.objects.all()
#         
#         name = request.query_params.get('name', None)
#         if name is not None:
#             leadnote = LeadNote.filter(name__icontains=name)
#         
#         leadnote_serializer = LeadNoteSerializer(leadnote, many=True)
#         return Response(leadnote_serializer.data)
#        
#  
#     elif request.method == 'POST':
#         leadnote_serializer = LeadNoteSerializer(data=request.data)
#         if leadnote_serializer.is_valid():
#             leadnote_serializer.save()
#             return Response(leadnote_serializer.data, status=status.HTTP_201_CREATED) 
#         return Response(leadnote_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     
#     elif request.method == 'DELETE':
#         count = LeadNote.objects.all().delete()
#         return Response({'message': '{} LeadNote were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
#
# @api_view(['GET', 'PUT', 'DELETE'])
# def leadnote_detail(request, pk):
#     try: 
#         leadnote = LeadNote.objects.get(pk=pk) 
#     except LeadNote.DoesNotExist: 
#         return Response({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND) 
#  
#     if request.method == 'GET': 
#         leadnote_serializer = BorrowerNoteSerializer(leadnote) 
#         return Response(leadnote_serializer.data) 
#  
#     elif request.method == 'PUT': 
#         leadnote = LeadNote.objects.get(pk=pk) 
#         leadnote_serializer = LeadNoteSerializer(instance=leadnote, data=request.data) 
#         if leadnote_serializer.is_valid(): 
#             leadnote_serializer.save() 
#             return Response(leadnote_serializer.data) 
#         return Response(leadnote_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
#  
#     elif request.method == 'DELETE': 
#         leadnote.delete() 
#         return Response({'message': 'LeadNote was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    
# Status API

# @api_view(['GET', 'PUT', 'DELETE'])
# def status(request, pk):
#     try: 
#         status = Lead.objects.get(pk=pk) 
#     except Status.DoesNotExist: 
#         return Response({'message': 'Status does not exist'}, status=status.HTTP_404_NOT_FOUND) 
#  
#     if request.method == 'GET': 
#         status_serializer = StatusSerializer(status) 
#         return Response(status_serializer.data) 
#  
#     elif request.method == 'PUT': 
#         status = status.objects.get(pk=pk)
#         status_serializer = StatusSerializer(instance=status, data=request.data) 
#         if status_serializer.is_valid(): 
#             status_serializer.save() 
#             return Response(status_serializer.data) 
#         return Response(status_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
#  
#     elif request.method == 'DELETE': 
#         status.delete() 
#         return Response({'message': 'Status was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
