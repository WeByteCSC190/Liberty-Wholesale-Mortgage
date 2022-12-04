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
def test_acccounts_tokens(user):

    username = user.username

    response = client.post("/accounts/token", dict(username=username, password="Gamma123"), format='json')

    assert response.status_code == 200

@pytest.mark.django_db  
def test_acccounts_token_refresh(user):
    username = user.username

    tokens = client.post("/accounts/token", dict(username=username, password="Gamma123"), format='json')


    refresh = tokens.data['refresh']

    data = {
        'refresh': refresh
    }

    response = requests.post('http://localhost:8000//accounts/token/refresh', data=data)

    assert response.status_code == 200

@pytest.mark.django_db  
def test_acccounts_token_verify(user):
    username = user.username

    tokens = client.post("/accounts/token", dict(username=username, password="Gamma123"), format='json')


    refresh = tokens.data['refresh']
    access = tokens.data['access']

    data = {
        'token': access
    }

    response = requests.post('http://localhost:8000//accounts/token/verify', data=data)

    assert response.status_code == 200    

@pytest.mark.django_db  
def test_acccounts_users(user):
    username = user.username

    tokens = client.post("/accounts/token", dict(username=username, password="Gamma123"), format='json')


    access = tokens.data['access']

    headers = {
        'Authorization': 'Bearer ' + access,
        'Content-Type': 'application/x-www-form-urlencoded',
    }

    data = '{"username": {username}, "password": "Gamma123"}'

    response = requests.get('http://localhost:8000/accounts/users/list', headers=headers, data=data)

    
    assert response.status_code == 200