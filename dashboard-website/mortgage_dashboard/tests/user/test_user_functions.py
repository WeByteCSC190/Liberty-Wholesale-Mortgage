import pytest
import datetime
import requests
import json
import time
from rest_framework.test import APIClient

client = APIClient()

@pytest.mark.django_db  
def test_user_list(user):
    username = user.username

    tokens = client.post("/accounts/token", dict(username=username, password="Gamma123"), format='json')

    # refresh = tokens.data['refresh']
    # print("Refresh token: " + refresh)

    access = tokens.data['access']

    headers = {
        'Authorization': 'Bearer ' + access,
        'Content-Type': 'application/x-www-form-urlencoded',
    }

    data = '{"username": {username}, "password": "Gamma123"}'

    response = requests.get('http://localhost:8000/accounts/users/list', headers=headers, data=data)

    # response = client.get("/accounts/users/list", json={'username':username, 'password':'Gamma123'},  headers=header)
    
    assert response.status_code == 200


@pytest.mark.django_db  
def test_user_register():

    dct = dict(username="Ranch",password="webyte123(", fName="savage", lName="21", email="sword@gmail.com", nmlsID=32424243)

    response = client.post("/accounts/users/register", dct ,format='json')
    assert response.status_code == 201


@pytest.mark.django_db  
def test_user_info(user):

    username = user.username

    tokens = client.post("/accounts/token", dict(username=username, password="Gamma123"), format='json')

    # refresh = tokens.data['refresh']
    # print("Refresh token: " + refresh)

    access = tokens.data['access']

    header = {
        'Authorization': 'Bearer ' + access,
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    response = requests.get('http://localhost:8000/accounts/users/info', headers=header)

    # response = client.get("/accounts/users/info", headers=header)
    assert response.status_code == 200


@pytest.mark.django_db  
def test_user_milestone(user):

    username = user.username

    tokens = client.post("/accounts/token", dict(username=username, password="Gamma123"), format='json')


    access = tokens.data['access']
    # print(access)
    # response = client.get("/accounts/users/milestones", headers={"Authorization": f"Bearer {access}"})
    headers = {
        'Authorization': 'Bearer ' + access,
        'Content-Type': 'application/x-www-form-urlencoded',
    }

    response = requests.get('http://localhost:8000//accounts/users/milestones', headers=headers)
    # print(response)
    assert response.status_code == 200


@pytest.mark.django_db  
def test_user_update(user):
    username = user.username

    tokens = client.post("/accounts/token", dict(username=username, password="Gamma123"), format='json')

    access = tokens.data['access']

    headers = {
        'Authorization': 'Bearer ' + access,
        'Content-Type': 'application/x-www-form-urlencoded',
    }

    info = requests.get('http://localhost:8000/accounts/users/info', headers=headers)

    id = info.text[6]

    data = '{"username": "dolph", "email": "test@gmail.com", "fName": "yung", "lName": "dolph", "bio": "test", "uID": 23242424, "nmlsID": 32432423, "ssn": 3123123, "address_1": "32242 dsfsf", "address_2": "w34w34qwe 2323", "zip_code": 23422, "role": "Loan Processor", "city": "sactown", "state": "cali"}'

    headers = {
        'Authorization': 'Bearer ' + access,
        'Content-Type': 'application/json',
    }

    print('\n\nhttp://localhost:8000/accounts/users/update_profile/'+id+'/')
    response = requests.put('http://localhost:8000/accounts/users/update_profile/'+id+'/', headers=headers, data=data)

    assert response.status_code == 200
