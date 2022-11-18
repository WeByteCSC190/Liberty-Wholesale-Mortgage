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
def test_user_update(user):
    response = client.post("/accounts/login", dict(username="Aruna123",password="luz213"), format='json')
    csrftoken = response.cookies['csrftoken'] 

    response = client.put("/profile/update",json={
    "username": "Aruna123",
    "password": "luz21311",
    "uID": 342424,
    "fName": "Aruna",
    "lName": "Lucero",
    "nmlsID": 345353,
    "ssn": 11111113,
    "is_superuser": 0,
    "is_staff": 0,
    "is_active": 1

    }, headers={'X-CSRFToken': csrftoken, 'Content-Type': 'application/json'})

    assert response.status_code == 200

@pytest.mark.django_db  
def test_get_user(user):
    response = client.post("/accounts/login", dict(username="Aruna123",password="luz213"), format='json')

    response = client.get("/profile/user")

    assert response.status_code == 200