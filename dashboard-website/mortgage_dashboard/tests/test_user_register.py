from api.models import UserProfile
from accounts.serializers import UserSerializer
from django.contrib.auth.models import User
import pytest

@pytest.mark.django_db
def test_user_register():

    user = User.objects.create_user('username','password')
    user = User.objects.get(id=user.id)                                
    UserProfile.objects.create(user = user, username = '', password = '',uID = 000000, fName= '', lName= '',nmlsID= 000000, ssn= 000000, is_superuser = 0, is_staff = 0, is_active = 1)
                    
    assert User.objects.count() == 1 and UserProfile.objects.count() == 1 

