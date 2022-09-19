from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from api.models import UserProfile
from api.serializers import UserProfileSerializer 

class GetUserProfileView(APIView):
    def get(self, request, format = None):
        user = self.request.user
        username = user.username

        user = User.objects.get(id = user.id)
        
        user_profile = UserProfile.objects.get(user=user)
        user_profile = UserProfileSerializer(user_profile)

        return Response({'profile': user_profile.data, 'username': str(username)})
