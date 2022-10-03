from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from api.models import UserProfile
from api.serializers import UserProfileSerializer 

class GetUserProfileView(APIView):
    def get(self, request, format = None):
        try:
            user = self.request.user
            username = user.username 

            user = User.objects.get(id=user.id) 

            user_profile = UserProfile.objects.get(user = user)
            user_profile = UserProfileSerializer(user_profile)

            return Response({'profile': user_profile.data, 'username': str(username)})
        except:
            return Response({'error': 'Something went wrong when retreiving profile'})


class UpdateUserProfileView(APIView):
    def put(self, request, format = None):
        
        try:
            user = self.request.user 
            username = user.username

            data = self.request.data        
            password = data['password']
            uID = data['uID']
            fName = data['fName']
            lName = data['lName']
            nmlsID = data['nmlsID']
            ssn = data['ssn']
            
            user = User.objects.get(id = user.id)

            UserProfile.objects.filter(user = user.id).update(password=password,uID=uID,fName=fName,lName=lName,nmlsID=nmlsID,ssn=ssn)
            
            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)

            return Response({'profile': user_profile.data, 'username': str(username)})
        except:
            return Response({'error': 'Something went wrong when updating profile'})
