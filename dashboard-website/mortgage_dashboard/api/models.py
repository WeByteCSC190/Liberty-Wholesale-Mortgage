from django.db import models
import random

# Create your models here.

## Models.py gets converted into our database and
## is an easy way to define our database tables
## in python as this abstracts the database 
## language

## I need someone to finish this according to 
## negins DB mapping in draw.io, located in 
## the db channel in our Discord

# This is a sample function, must be improved if intended to be used for cid
def generate_random_number():
    cid = random.randrange(1000000)
    return cid

class Client(models.Model):
    #this is a template model, ex. cid needs to have a default value
    cid = models.IntegerField(
        null=False, default=generate_random_number(), unique=True
    )
    fname = models.CharField(
        max_length=40, null=True
    )
    lname = models.CharField(
        max_length=40, null=True
    )
    email = models.CharField(
        max_length=120, null=True
    )
    phone_num = models.CharField(
        max_length=16, null=True
    )
