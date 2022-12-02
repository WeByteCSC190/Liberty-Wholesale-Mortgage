import pytest 
import json
from django.contrib.auth.models import User
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from users.models import UserAccountManager, CustomUser
from django.contrib.auth import get_user_model

@pytest.fixture
def user():
    
    User = get_user_model()
    
    user = User.objects.create_user(
        username = "Aruna123",
        email = "GAMMA@gmail.com", 
        fName = "Aruna", 
        lName = "Lucero", 
        nmlsID = 8459643, 
        password= "Gamma123"
    )
    return user

@pytest.fixture
def admin():
    User = get_user_model()
    user = User.objects.create_superuser(
        username = "Cookie",
        email = "ALPHA@gmail.com",
        fName = "Magdalena",
        lName = "Borislava",
        nmlsID = 39249243,
        password = "alphaGEO",
    )
    return admin
