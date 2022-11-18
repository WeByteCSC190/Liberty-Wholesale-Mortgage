# from xmlrpc.client import ResponseError
# from django.shortcuts import render, redirect
# from django.contrib.auth import authenticate,login, logout
# from django.contrib import messages

from rest_framework.views import APIView
from rest_framework import permissions 
from rest_framework.response import Response
from api.models import UserProfile
from .serializers import UserSerializer
from api.serializers import UserProfileSerializer
from django.contrib.auth.models import User
from django.contrib import auth
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator

@method_decorator(csrf_protect, name='dispatch')
class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )
    
    def post(self, request, format=None):
        data = self.request.data
        username = data['username']
        password = data['password']
        re_password = data['re_password']

        try:
            if password == re_password:
                if User.objects.filter(username=username).exists():
                    return Response({'error': 'Username already exists' })
                else:
                    if len(password) < 6:
                        return Response({'error': 'Password must be at least 6 characters' })
                    else:
                        user = User.objects.create_user(username=username, password=password)

                        user = User.objects.get(id=user.id)
                                
                        UserProfile.objects.create(user = user, username = username, password = '',uID = 000000, fName= '', lName= '',nmlsID= 000000, ssn= 000000, is_superuser = 0, is_staff = 0, is_active = 1)

                    
                        return Response({ 'success': 'User created successfully'})
            else: 
                return Response({'error': 'Passwords do not match' })
        except:
            return Response({'error': 'Something went wrong registering account.'})

@method_decorator(csrf_protect, name='dispatch')
class CheckAuthenticatedView(APIView): 
     def get(self, request, format = None):
        user = self.request.user
        try:
            isAuthenticated = user.is_authenticated
            
            if isAuthenticated:
                return Response({'isAuthenticated': 'success'})
            else:
                return Response({'isAuthenticated': 'error'})
        except:
            return Response({'error': 'Something went wrong when checking authentication status' })

@method_decorator(csrf_protect, name='dispatch')
class LoginView(APIView):
    permission_classes = (permissions.AllowAny, )


    def post(self, request, format = None):
        data = self.request.data
        
        try:
            if request.method == "POST":
                username = data['username']
                password = data['password']

                user = auth.authenticate(request, username=username, password=password) 

                if user is not None:
                    auth.login(request, user)
                    return Response({'success': 'User authenticated', 'username': username})

                else:
                    return Response({'error': 'Error Authenticating' })
        except:
            return Response({'error': 'Something went wrong when logging in' })


class DeleteAccountView(APIView):
    
    def delete(self, request, format=None):
        user = self.request.user
        
        try: 
            user = User.objects.filter(id=user.id).delete()
            user = UserProfile.objects.filter(id=user.id).delete()
            return Response({'success': 'User deleted successfully'})
        except:
            return Response({'error': 'Something went wrong when deleting user' })


class GetUsersView(APIView):        
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        users = UserProfile.objects.all()
        users = UserProfileSerializer(users, many= True)
        return Response(users.data)


class LogoutView(APIView):
    def post(self, request, format = None):
        try:
            auth.logout(request) 
            return Response({'success': 'Logout Successful'})
        except:
            return Response({'error': 'Something went wrong when logging out' })
            

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({'success': 'CSRF cookie set'})
