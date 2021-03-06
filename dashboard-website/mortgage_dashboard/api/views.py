import re
from django.shortcuts import render
from rest_framework import generics, status

from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view

from .serializers import ClientSerializer, AddClient, UserSerializer
from .models import Client, User

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
    users = User.objects.all()
    serializer = UserSerializer(users, many = True)
    
    return Response(serializer.data)

@api_view(['GET'])
def userDetail(request,pk):
    user = User.objects.get(id = pk)
    serializer = UserSerializer(user, many = False)
    return Response(serializer.data)

@api_view(['POST'])
def createUser(request):
    serializer = UserSerializer(data = request.data)
    
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def updateUser(request,pk):
    user = User.objects.get(id = pk)
    serializer = UserSerializer(instance=user, data=request.data)
    
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteUser(request,pk):
    user = User.objects.get(id = pk)
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

