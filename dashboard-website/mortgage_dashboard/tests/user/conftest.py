import pytest 
import json
from django.contrib.auth.models import User
from api.models import UserProfile

from faker import Faker
fake = Faker()

@pytest.fixture
def user():

    user = User.objects.create_user(username="Aruna123", password="luz213")
    user = User.objects.get(id=user.id)

    user = UserProfile.objects.create(
        user = user,
        username = "Aruna123",
        password = "luz213",
        uID = 342424,
        fName = "Aruna",
        lName = "Lucero",
        nmlsID = 84596,
        ssn = 6666234,
        is_superuser = 0,
        is_staff = 0,
        is_active = 1,       
    )
    return user
