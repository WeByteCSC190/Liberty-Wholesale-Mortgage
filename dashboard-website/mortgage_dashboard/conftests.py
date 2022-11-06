from api.models import UserProfile
from accounts.serializers import UserSerializer
from django.contrib.auth.models import User
import pytest

# @pytest.fixture
# def regular_user_register(db):
#     user = User.objects.create_user('username','password')
#     user = User.objects.get(id=user.id)                                
#     UserProfile.objects.create(user = user, username = 'Garibaldi212', password = 'password',uID = 000000, fName= 'Garibaldi', lName= 'Ciao',nmlsID= 2121212, ssn= 111258934, is_superuser = 0, is_staff = 0, is_active = 1)
#     print('user-created')
#     return user    


# @pytest.fixture
# def admin_user_register(db):
#     user = User.objects.create_user('Theodoric9888','password')
#     user = User.objects.get(id=user.id)                                
#     UserProfile.objects.create(user = user, username = 'Theodoric9888', password = 'password',uID=358126497, fName= 'Theodoric', lName= 'Suleiman',nmlsID= 871426395, ssn= 318642975, is_superuser = 1, is_staff = 1, is_active = 1)
#     print('user-created')
#     return user    
