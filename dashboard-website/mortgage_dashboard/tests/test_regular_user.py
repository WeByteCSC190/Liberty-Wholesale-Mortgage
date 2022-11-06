from api.models import UserProfile
from accounts.serializers import UserSerializer
from django.contrib.auth.models import User
import pytest


@pytest.fixture
def regular_user_register(db):
    user = User.objects.create_user('Garibaldi212','password')
    user = User.objects.get(id=user.id)                                
    user = UserProfile.objects.create(user = user, username = 'Garibaldi212', password = 'password',uID = 000000, fName= 'Garibaldi', lName= 'Ciao',nmlsID= 2121212, ssn= 111258934, is_superuser = 0, is_staff = 0, is_active = 1)
    print('user-created')
    return user    

def test_user_username(regular_user_register):
    print('username-check')
    assert regular_user_register.username == 'Garibaldi212'

def test_user_password(regular_user_register):
    print('password-check')
    assert regular_user_register.password == 'password'

def test_user_uID(regular_user_register):
    print('uID-check')
    assert regular_user_register.uID == 000000

def test_user_fName(regular_user_register):
    print('fName-check')
    assert regular_user_register.fName == 'Garibaldi'

def test_user_lName(regular_user_register):
    print('lName-check')
    assert regular_user_register.lName == 'Ciao'

def test_user_nmlsID(regular_user_register):
    print('nmlsID-check')
    assert regular_user_register.nmlsID == 2121212

def test_user_ssn(regular_user_register):
    print('ssn-check')
    assert regular_user_register.ssn == 111258934

def test_user_is_superuser(regular_user_register):
    print('is_superuser-check')
    assert regular_user_register.is_superuser == 0
    
def test_user_is_staff(regular_user_register):
    print('is_staff-check')
    assert regular_user_register.is_staff == 0    

def test_user_is_active(regular_user_register):
    print('is_active-check')
    assert regular_user_register.is_active == 1    

 