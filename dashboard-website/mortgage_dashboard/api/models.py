from datetime import datetime
from pyexpat import model
from sqlite3 import Date
from tarfile import LENGTH_NAME
from xmlrpc.client import DateTime
from django.db import models
from django.db.models import OuterRef, Subquery
import random
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# Models.py gets converted into our database and
# is an easy way to define our database tables
# in python as this abstracts the database
# language

# I need someone to finish this according to
# negins DB mapping in draw.io, located in
# the db channel in our Discord
# This is a sample function, must be improved if intended to be used for cID


def generate_random_number():
    cID = random.randrange(1000000)
    return cID


class News(models.Model):
    desc = models.TextField('Description', blank=True)

    def __str__(self):
        return self.desc

class Anouncements(models.Model):
    desc = models.TextField('Description', blank=True)
    link = models.URLField('Website Address')

    def __str__(self):
        return self.link



class Files(models.Model):
    fileType = models.URLField('File type')
    filePath = models.URLField('File path')

    def __str__(self):
        return self.fileType


class Media(models.Model):
    link = models.URLField('Website Address')

    def __str__(self):
        return self.link


class Resources(models.Model):
    media = models.ForeignKey(
        Media, blank=True, null=True, on_delete=models.CASCADE)
    files = models.ForeignKey(
        Files, blank=True, null=True, on_delete=models.CASCADE)
    announcements = models.ForeignKey(
        Anouncements, blank=True, null=True, on_delete=models.CASCADE)
    news = models.ForeignKey(
        News, blank=True, null=True, on_delete=models.CASCADE)

    id = models.IntegerField('ID', primary_key=True, null=False,
                             default=generate_random_number(), unique=True)
    name = models.CharField('Name', max_length=40, null=True, blank=True)

    def __str__(self):
        return self.id


class Status(models.Model):
    # 2lead = models.ForeignKey(Lead, blank=True, null = True)
    # borrower = models.ForeignKey(Lead, blank=True, null= True)
    status = models.CharField(
        'Status', primary_key=True, max_length=12, null=False, blank=True)
    id = models.IntegerField(
        'ID', null=False, default=generate_random_number(), unique=True)
    name = models.CharField('Name', max_length=40, null=True, blank=True)
    desc = models.TextField('Description', blank=True)

    def __str__(self):
        return str(self.id)

class Annoucements(models.Model):
     date=models.DateTimeField('Date')
     content=models.TextField('Content',blank=True)

     def __str__(self):
         return str(self.date)+" "+str(self.content)

class Lead(models.Model):
    resources = models.ForeignKey(
        Resources, blank=True, null=True, on_delete=models.CASCADE)

    caseId = models.IntegerField(
        'Case ID', primary_key=True, null=False, default=generate_random_number(), unique=True)
    date = models.DateTimeField('Date')
    fName = models.CharField(max_length=40, null=True, blank=True)
    lName = models.CharField(max_length=40, null=True, blank=True)
    creditScore = models.IntegerField(
        'Credit Score', null=False, default=generate_random_number(), unique=True)
    email = models.EmailField('Email Address')
    phone_num = models.CharField('Phone Number', max_length=16, null=True)
    status = models.ForeignKey(
        Status, blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f'caseId: {self.caseId}'


class Borrower(models.Model):
    caseId = models.IntegerField(
        'Case ID', primary_key=True, null=False, default=generate_random_number(), unique=True)
    date = models.DateTimeField('Date')
    fName = models.CharField(max_length=40, null=True, blank=True)
    lName = models.CharField(max_length=40, null=True, blank=True)
    creditScore = models.IntegerField(
        'Credit Score', null=False, default=generate_random_number(), unique=True)
    email = models.EmailField('Email Address')
    phone_num = models.CharField('Phone Number', max_length=16, null=True)
    status = models.ForeignKey(
        Status, blank=True, null=True, on_delete=models.CASCADE)
    status_check = models.BooleanField('Approved', default = False)
    
    def __str__(self):
        return self.fName


class MileStone(models.Model):
    id = models.IntegerField('ID', primary_key=True, null=False,
                             default=generate_random_number(), unique=True)
    name = models.CharField('Name', max_length=40, null=True, blank=True)
    desc = models.TextField('Description', blank=True)

    def __str__(self):
        return str(self.id)


class LoanProcessor(models.Model):
    mileStone = models.ForeignKey(
        MileStone, blank=True, null=True, on_delete=models.CASCADE)
    pTitle = models.CharField(max_length=40, null=True, blank=True)

    def __str__(self):
        return self.mileStone


class LoanOfficer(models.Model):
    mileStone = models.ForeignKey(
        MileStone, blank=True, null=True, on_delete=models.CASCADE)

    oTitle = models.CharField(max_length=40, null=True, blank=True)

    def __str__(self):
        return self.mileStone


class UserProfile(models.Model):
    # resources = models.ForeignKey(
    #     Resources, blank=True, null=True, on_delete=models.CASCADE)

    # userName = models.CharField(max_length=40, null=True, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    password = models.CharField(max_length=20, default='')
    uID = models.IntegerField(default=000000)
    fName = models.CharField(max_length=40, default='') 
    lName = models.CharField(max_length=40, default='')
    nmlsID = models.IntegerField(default=000000)  # could not tell what the variable name is supposed to be
    ssn = models.IntegerField(default=000000)

    def __str__(self):
        return str(self.fName)


class Client(models.Model):
    # this is a template model, ex. cID needs to have a default value
    resources = models.ForeignKey(
        Resources, blank=True, null=True, on_delete=models.CASCADE)

    cID = models.IntegerField(
        null=False, default=generate_random_number(), unique=True)
    fName = models.CharField(
        'First Name', max_length=40, null=True, blank=True)
    lName = models.CharField('Last Name', max_length=40, null=True, blank=True)
    email = models.EmailField('Email Address')
    phone_num = models.CharField('Phone Number', max_length=16, null=True)

    def __str__(self):
        return self.cID

class ImportantAnnoucements(models.Model):

    date=models.DateTimeField('Date')
    content=models.TextField('Content',blank=True)

    def __str__(self):
         return str(self.date)

class RecentBorrowers(models.Model):

    date = models.CharField('Date', max_length=10, null=True, blank=True)
    fName = models.CharField(
        'First Name', max_length=40, null=True, blank=True)
    lName = models.CharField('Last Name', max_length=40, null=True, blank=True)

    def __str__(self):
        return str(self.date)+" "+str(self.fName)+" "+str(self.lName)

class RecentLeads(models.Model):
     date = models.CharField('Date', max_length=10, null=True, blank=True)
     fName = models.CharField(
        'First Name', max_length=40, null=True, blank=True)
     lName = models.CharField('Last Name', max_length=40, null=True, blank=True)

     def __str__(self):
         return str(self.date)+" "+str(self.fName)+" "+str(self.lName)

class Lender(models.Model):
    company = models.CharField('Company', max_length=200, null=True, blank=True)
    state = models.CharField('State', max_length=200, null=True, blank=True)
    rating = models.CharField('Rating', max_length=2, null=True, blank=True)
    programs = models.CharField('Programs', max_length=200, null=True, blank=True)

    lender_FHA_ID = models.CharField('Lender FHA ID', max_length=20, null=True, blank=True)
    lender_VA_ID = models.CharField('Lender VA ID', max_length=20, null=True, blank=True)
    account_executive = models.CharField('Account Executive', max_length=20, null=True, blank=True)
    phone_num = models.CharField('Phone', max_length=30, null=True, blank=True)
    email = models.EmailField('Email', blank=True)
    website = models.CharField('Website', max_length=200, null=True, blank=True)

    def __str__(self):
        return self.company + " (" + self.state + ")"
