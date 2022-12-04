import pytest
import datetime
import requests
import json
import time
from rest_framework.test import APIClient

client = APIClient()

@pytest.mark.django_db  
def test_leads(user):
    username = user.username

    response = requests.get('http://localhost:8000/api/leads/')
    
    assert response.status_code == 200


@pytest.mark.django_db  
def test_borrowers():

    response = requests.get('http://localhost:8000/api/borrowers/')
    assert response.status_code == 200


@pytest.mark.django_db  
def test_important_announcements(user):
    response = requests.get('http://localhost:8000/api/ImportantAnnouncements/')

    assert response.status_code == 200

@pytest.mark.django_db  
def test_announcements(user):
    response = requests.get('http://localhost:8000/api/Announcements/')

    assert response.status_code == 200

@pytest.mark.django_db  
def test_lender(user):
    response = requests.get('http://localhost:8000/api/lender/')

    assert response.status_code == 200


@pytest.mark.django_db  
def test_lender_logo(user):
    response = requests.get('http://localhost:8000/api/lenderLogo/')

    assert response.status_code == 200


@pytest.mark.django_db  
def test_bio(user):
    response = requests.get('http://localhost:8000/api/bio/')

    assert response.status_code == 200


@pytest.mark.django_db  
def test_resources(user):
    response = requests.get('http://localhost:8000/api/resources/')

    assert response.status_code == 200


@pytest.mark.django_db  
def test_recycling_bin(user):
    response = requests.get('http://localhost:8000/api/recyclingBin/')

    assert response.status_code == 200

@pytest.mark.django_db  
def test_borrower_note(user):
    response = requests.get('http://localhost:8000/api/borrowernote/')

    assert response.status_code == 200

@pytest.mark.django_db  
def test_lead_note(user):
    response = requests.get('http://localhost:8000/api/leadnote/')

    assert response.status_code == 200

@pytest.mark.django_db  
def test_status(user):
    response = requests.get('http://localhost:8000/api/status/')

    assert response.status_code == 200    

@pytest.mark.django_db  
def test_files(user):
    response = requests.get('http://localhost:8000/api/files/')

    assert response.status_code == 200    

@pytest.mark.django_db  
def test_media(user):
    response = requests.get('http://localhost:8000/api/media/')

    assert response.status_code == 200    

                