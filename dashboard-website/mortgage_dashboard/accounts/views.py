# from xmlrpc.client import ResponseError
# from django.shortcuts import render, redirect
# from django.contrib.auth import authenticate,login, logout
# from django.contrib import messages

from rest_framework.views import APIView
from rest_framework import permissions 
from rest_framework.response import Response
from api.models import UserProfile
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

                        user.save()

                        user = User.objects.get(id=user.id)
    
                        userProfile = UserProfile(user = user, password = '',uID = '', fName= '', lName= '',nmlsID= '', ssn= '')
                        # userProfile = UserProfile(user=usr, first_name='',last_name='',phone='',city='')
                        userProfile.save()

                        return Response({ 'success': 'User created successfully' })
            else: 
                return Response({'error': 'Passwords do not match' })
        except:
            return Response({'error': 'Something went wrong registering account.' })

@method_decorator(csrf_protect, name='dispatch')
class CheckAuthenticatedView(APIView): 
     def get(self, request, format = None):
        
        try:
            isAuthenticated = User.is_authenticated
        
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
                userName = data['userName']
                password = data['password']

                user = auth.authenticate(request, username=userName, password=password) 

                if user is not None:
                    auth.login(request, user)
                    # return redirect('dashboard')
                    return Response({'success': 'User authenticated', 'userName': userName})

                else:
                    return Response({'error': 'Error Authenticating' })
                    # messages.success(request, ("There was in issue when logging in. Please try again."))
                    # return redirect('login')
                    
            # else:
            #     return render(request, '../frontend/src/pages/sign-in.jsx', {})
        except:
            return Response({'error': 'Something went wrong when logging in' })


class DeleteAccountView(APIView):
    
    def delete(self, request, format=None):
        user = self.request.user
        
        try: 
            user = User.objects.filter(id=user.id).delete()
            return Response({'success': 'User deleted successfully'})
        except:
            return Response({'error': 'Something went wrong when deleting user' })


class GetUsersView(APIView):        
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        users = User.objects.all()
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
