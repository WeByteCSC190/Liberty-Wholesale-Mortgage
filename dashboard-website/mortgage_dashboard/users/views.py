from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import UserProfile
from api.serializers import UserProfileSerializer 

class GetUserProfileView(APIView):
    def get(self, request, format = None):
        try:
            user = self.request.user
            username = user.username 

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
            username = data['username']        
            password = data['password']
            uID = data['uID']
            fName = data['fName']
            lName = data['lName']
            nmlsID = data['nmlsID']
            ssn = data['ssn']
            is_superuser = data['is_superuser']
            is_staff = data['is_staff']
            is_active = data['is_active']

            UserProfile.objects.filter(user = user.id).update(username=username,password=password,uID=uID,fName=fName,lName=lName,nmlsID=nmlsID,ssn=ssn,is_superuser=is_superuser,is_staff=is_staff,is_active=is_active)
            
            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)

            return Response({'profile': user_profile.data, 'username': str(username)})
        except:
            return Response({'error': 'Something went wrong when updating profile'})
