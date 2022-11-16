import pytest
import datetime
import requests
import json
import time
from rest_framework.test import APIClient, RequestsClient
from django.contrib.auth.models import User
from django.test import Client

client = APIClient()

@pytest.mark.django_db  
def test_user_login(user):

    response = client.post("/accounts/login", dict(username="Ranch",password="webyte123("), format='json')

    assert response.status_code == 200

@pytest.mark.django_db  
def test_user_admin_login(admin):

    response = client.post("/accounts/login", dict(username="Cookie",password="alphaGEO"), format='json')

    assert response.status_code == 200

@pytest.mark.django_db  
def test_user_register():

    response = client.post("/accounts/register", dict(username = "lupe541", password = "bagofSamosas", re_password="bagofSamosas"), format='json')

    assert response.status_code == 200


@pytest.mark.django_db  
def test_user_authenticated(user):

    response = client.post("/accounts/login", dict(username="Ranch",password="webyte123("), format='json')

    response = client.get("/accounts/authenticated")

    assert response.status_code == 200

@pytest.mark.django_db  
def test_get_csrf_token():

    response = client.get("/accounts/csrf_cookie")

    assert response.status_code == 200


@pytest.mark.django_db  
def test_get_users():

    response = client.get("/accounts/getUsers")

    assert response.status_code == 200

@pytest.mark.django_db  
def test_user_login_logout(user):

    response = client.post("/accounts/login", dict(username="Ranch",password="webyte123("), format='json')

    response = client.post("/accounts/logout",)

    assert response.status_code == 200


@pytest.mark.django_db  
def test_get_users(user):


    response = client.get("/accounts/getUsers")

    assert response.status_code == 200


@pytest.mark.django_db  
def test_user_update(user):
    response = client.post("/accounts/login", dict(username="Ranch",password="webyte123("), format='json')
    csrftoken = response.cookies['csrftoken'] 

    response = client.put("/profile/update",json={
    "username": "Ranch",
    "password": "webyte123(!",
    "uID": 12,
    "fName": "Pollo",
    "lName": "Loco",
    "nmlsID": 3412231,
    "ssn": 999999,
    "is_superuser": 0,
    "is_staff": 0,
    "is_active": 1

    }, headers={'X-CSRFToken': csrftoken, 'Content-Type': 'application/json'})

    assert response.status_code == 200

@pytest.mark.django_db  
def test_user_delete(user):
    response = client.post("/accounts/login", dict(username="Ranch",password="webyte123("), format='json')
    csrftoken = response.cookies['csrftoken'] 

    response = client.delete("/accounts/delete",headers={'X-CSRFToken': csrftoken})

    assert response.status_code == 200