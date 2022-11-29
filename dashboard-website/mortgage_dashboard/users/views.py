from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
# from django.views.generic.edit import UpdateView
from rest_framework import generics
from .models import *
from .serializers import UserCreateSerializer, UserSerializer, UpdateUserSerializer
from .forms import CustomUserChangeForm


class RegisterView(APIView):
  def post(self, request):
    data = request.data
    serializer = UserCreateSerializer(data=data)

    if not serializer.is_valid():
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    user = serializer.create(serializer.validated_data)
    user = UserSerializer(user)

    return Response(user.data, status=status.HTTP_201_CREATED)


class RetrieveUserView(APIView):
  permission_classes = [permissions.IsAuthenticated]

  def get(self, request):
    user = request.user
    user = UserSerializer(user)

    return Response(user.data, status=status.HTTP_200_OK)

# class UpdateUserView(APIView):

#     permission_classes = [permissions.IsAuthenticated]

#     def post(self, request):
#         user = request.user
#         user = UserSerializer(user)
#         user= request.body.fName
#         # return Response(str(request.body),status=status.HTTP_400_BAD_REQUEST)

#         if form.is_valid():
#             form.save()
#             return Response(status=status.HTTP_200_OK)
#         return Response(str(form.is_valid()), status=status.HTTP_400_BAD_REQUEST)

class UpdateProfileView(generics.UpdateAPIView):

    queryset = CustomUser.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = UpdateUserSerializer
