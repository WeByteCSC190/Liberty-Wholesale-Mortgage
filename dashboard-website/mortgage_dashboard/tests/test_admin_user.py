from api.models import UserProfile
from accounts.serializers import UserSerializer
from django.contrib.auth.models import User
import pytest

@pytest.fixture
def admin_user_register(db):
    user = User.objects.create_user('Theodoric9888','password')
    user = User.objects.get(id=user.id)                                
    user = UserProfile.objects.create(user = user, username = 'Theodoric9888', password = 'password',uID=358126497, fName= 'Theodoric', lName= 'Suleiman',nmlsID= 871426395, ssn= 318642975, is_superuser = 1, is_staff = 1, is_active = 1)
    print('user-created')
    return user    

def test_user_username(admin_user_register):
    print('username-check')
    assert admin_user_register.username == 'Theodoric9888'

def test_user_password(admin_user_register):
    print('password-check')
    assert admin_user_register.password == 'password'

def test_user_uID(admin_user_register):
    print('uID-check')
    assert admin_user_register.uID == 358126497

def test_user_fName(admin_user_register):
    print('fName-check')
    assert admin_user_register.fName == 'Theodoric'

def test_user_lName(admin_user_register):
    print('lName-check')
    assert admin_user_register.lName == 'Suleiman'

def test_user_nmlsID(admin_user_register):
    print('nmlsID-check')
    assert admin_user_register.nmlsID == 871426395

def test_user_ssn(admin_user_register):
    print('ssn-check')
    assert admin_user_register.ssn == 318642975

def test_user_is_superuser(admin_user_register):
    print('is_superuser-check')
    assert admin_user_register.is_superuser == 1
    
def test_user_is_staff(admin_user_register):
    print('is_staff-check')
    assert admin_user_register.is_staff == 1    

def test_user_is_active(admin_user_register):
    print('is_active-check')
    assert admin_user_register.is_active == 1    

 