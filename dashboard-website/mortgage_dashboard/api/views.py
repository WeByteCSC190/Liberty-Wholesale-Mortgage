from django.shortcuts import render
from rest_framework import generics, status
from .serializers import ClientSerializer, AddClientSerializer
from .models import Client
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse

# Create your views here.

class ClientView(generics.ListApiView):
    queryset = Client.objects.all()
    serializer-class= ClientSerializer

class AddClientView(APIView):
    serializer_class = AddClientSerializer
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
            
            return Response(ClientSerializer(client).data, status=status.HTTP200)

