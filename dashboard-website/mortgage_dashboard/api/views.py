from django.shortcuts import render
from rest_framework import generics, status
from .serializers import ClientSerializer, AddClient
from .models import Client
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse

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
            fname = serializer.data.get('fname')
            lname = serializer.data.get('lname')
            email = serializer.data.get('email')
            phone_num = serializer.data.get('phone_num')

            client = Client(fname=fname,lname=lname, email=email, phone_num=phone_num)
            client.save()
            
            return Response(ClientSerializer(client).data, status=status.HTTP_200_OK)

