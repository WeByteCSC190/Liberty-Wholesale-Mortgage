from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from django.views.generic.edit import UpdateView
from .models import *
from .serializers import UserCreateSerializer, UserSerializer
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

class UpdateUserView(APIView):

    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        user = request.user
        user = UserSerializer(user)
        form = CustomUserChangeForm(request, instance=user)

        if form.is_valid():
            form.save()
            return Response(status=status.HTTP_200_OK)
        return Response(str(form.is_valid()), status=status.HTTP_400_BAD_REQUEST)
