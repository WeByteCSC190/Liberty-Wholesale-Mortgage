import pytest 
import json
from django.contrib.auth.models import User
from users.models import UserAccountManager, CustomUser

from faker import Faker
fake = Faker()

@pytest.fixture
def user():

    user = UserAccountManager.create_user(
        username = "Ranch",
        email = "BETA@gmail.com", 
        fName = "Rick", 
        lName = "Sanzxcho", 
        nmlsID = 21312321, 
    )
    return user


# @pytest.fixture
# def admin():
#     admin = UserAccountManager.create_superuser(
#         username = "Cookie",
#         password = "alphaGEO",
#         email = "ALPHA@gmail.com",
#         fName = "Magdalena",
#         lName = "Borislava",
#         nmlsID = 39249243,
#     )
#     return admin
