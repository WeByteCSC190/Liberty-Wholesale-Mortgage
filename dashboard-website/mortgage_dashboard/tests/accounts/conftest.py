import pytest 
import json
from django.contrib.auth.models import User
from api.models import UserProfile

from faker import Faker
fake = Faker()

@pytest.fixture
def user():

    user = User.objects.create_user(username="Ranch", password="webyte123(")
    user = User.objects.get(id=user.id)

    user = UserProfile.objects.create(
        user = user,
        username = "Ranch",
        password = "webyte123(",
        uID = 123456,
        fName = "Rick",
        lName = "Sanzxcho",
        nmlsID = 21312321,
        ssn = 1234451,
        is_superuser = 0,
        is_staff = 0,
        is_active = 1,       
    )
    return user


@pytest.fixture
def admin():

    admin = User.objects.create_user(username="Cookie", password="alphaGEO")
    admin = User.objects.get(id=admin.id)

    admin = UserProfile.objects.create(
        user = admin,
        username = "Cookie",
        password = "alphaGEO",
        uID = 98706,
        fName = "Magdalena",
        lName = "Borislava",
        nmlsID = 39249243,
        ssn = 555555,
        is_superuser = 1,
        is_staff = 1,
        is_active = 1,       
    )
    return admin
