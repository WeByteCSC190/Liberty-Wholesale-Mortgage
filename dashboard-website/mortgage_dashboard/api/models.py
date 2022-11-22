from datetime import datetime
# from pyexpat import model
from sqlite3 import Date
from tarfile import LENGTH_NAME
from xmlrpc.client import DateTime
from django.db import models
from django.db.models import OuterRef, Subquery
import random
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.utils.translation import gettext_lazy as lazy
from django.core.validators import FileExtensionValidator
from django.forms import ModelForm
from new_users.models import CustomUser
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



class File(models.Model):
    file = models.FileField(upload_to='files_uploaded',null=True,
        validators=[FileExtensionValidator(allowed_extensions=['doc','pdf','docx','txt'])])
    date_uploaded = models.DateTimeField(default=timezone.now)
    id = models.IntegerField('ID', primary_key=True, null=False,
                             default=generate_random_number(), unique=True)
    def __str__(self):
        return self.id


class Media(models.Model):
    link = models.URLField('Website Address')

    def __str__(self):
        return self.link

class Video(models.Model):
    video = models.FileField(upload_to='videos_uploaded',null=True,
        validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])
    date_uploaded = models.DateTimeField(default=timezone.now)
    # user = models.ForeignKey(CustomUser,on_delete= models.CASCADE)
    id = models.IntegerField('ID', primary_key=True, null=False,
                             default=generate_random_number(), unique=True)
    def __int__(self):
        return self.id

class Resources(models.Model):
    media = models.ForeignKey(
        Media, blank=True, null=True, on_delete=models.CASCADE)
    files = models.ForeignKey(
        File, blank=True, null=True, on_delete=models.CASCADE)
    announcements = models.ForeignKey(
        Anouncements, blank=True, null=True, on_delete=models.CASCADE)
    news = models.ForeignKey(
        News, blank=True, null=True, on_delete=models.CASCADE)

    id = models.IntegerField('ID', primary_key=True, null=False,
                             default=generate_random_number(), unique=True)
    name = models.CharField('Name', max_length=40, null=True, blank=True)
    video = models.ForeignKey(Video, blank=True, null=True, on_delete=models.CASCADE)

    def __int__(self):
        return self.id

class Announcements(models.Model):
     date=models.DateTimeField(auto_now_add=True)
     content=models.TextField('Content',blank=True)

     def __str__(self):
         return str(self.date)+" "+str(self.content)

class ImportantAnnouncements(models.Model):
     date=models.DateTimeField('Date')
     content=models.TextField('Content',blank=True)

     def __str__(self):
         return str(self.date)+" "+str(self.content)


class Lead(models.Model):
    STATUS_CHOICES = [
        ('Application_Complete', 'Application Complete'),
        ('Recently_Added', 'Recently Added'),
        ('Contacted', 'Contacted'),
        ('Closed', 'Closed'),
        ('Declined', 'Declined'),
        ('In_Progress', 'In Progress'),
        ('Missing_Paperwork', 'Missing Paperwork'),
    ]

    caseId = models.IntegerField(
        'Case ID', primary_key=True, null=False, default=generate_random_number(), unique=True)
    date = models.DateTimeField(auto_now_add=True, null=True)
    fName = models.CharField(max_length=40, null=True, blank=True)
    lName = models.CharField(max_length=40, null=True, blank=True)
    creditScore = models.IntegerField(
        'Credit Score', blank=True, null=True, unique=False)
    email = models.EmailField('Email Address')
    phone_num = models.CharField('Phone Number', max_length=16, null=True)
    status = models.CharField(max_length=40, choices=STATUS_CHOICES)

    # def delete(self):

    def __str__(self):
        return self.fName

class Borrower(models.Model):
    STATUS_CHOICES = [
        ('Application_Complete', lazy('Application Complete')),
        ('AUS_Cleared', lazy('AUS Cleared')),
        ('Initial_Disclosure_Sent', lazy('Initial Disclosure Sent')),
        ('Title_Ordered', lazy('Title Ordered')),
        ('Title_Recieved', lazy('Title Recieved')),
        ('Appraisal_Ordered', lazy('Appraisal Ordered')),
        ('Appraisal_Recieved', lazy('Appraisal Recieved')),
        ('Initial_Disclosure_Recieved', lazy('Initial Disclosure Recieved')),
        ('UW_Submitted', lazy('UW Submitted')),
        ('UW_Response', lazy('UW Response')),
        ('Pending_Conditions', lazy('Pending Conditions')),
        ('Cleared_To_Close', lazy('Cleared To Close')),
        ('Closing_Package_Sent', lazy('Closing Package Sent')),
        ('New', lazy('New')),
        ('Closed', lazy('Closed')),
        ('In_Progress', lazy('In Progress')),
    ]

    caseId = models.IntegerField(
        'Case ID', primary_key=True, null=False, default=generate_random_number(), unique=True)
    date = models.DateTimeField(auto_now_add = True)
    fName = models.CharField(max_length=40, null=True, blank=True)
    lName = models.CharField(max_length=40, null=True, blank=True)
    creditScore = models.IntegerField(
        'Credit Score', null=True)
    email = models.EmailField('Email Address')
    phone_num = models.CharField('Phone Number', max_length=16, null=True)
    status = models.CharField(max_length=40, choices=STATUS_CHOICES)

    def __str__(self):
        return self.fName

class RecyclingBin(models.Model):
    dataName = models.CharField('Data Name', max_length=30, null=True, blank=True)
    trashID = models.IntegerField(
        'trash ID', primary_key=True, null=False, default=generate_random_number(), unique=True)
    resources = models.ForeignKey(
        Resources, blank=True, null=True, on_delete=models.CASCADE)

    caseId = models.IntegerField(
        'Case ID', null=False, default=generate_random_number())
    date = models.DateTimeField('Date')
    fName = models.CharField(max_length=40, null=True, blank=True)
    lName = models.CharField(max_length=40, null=True, blank=True)
    creditScore = models.IntegerField(
        'Credit Score', blank=True, null=True, unique=False)
    email = models.EmailField('Email Address')
    phone_num = models.CharField('Phone Number', max_length=16, null=True)
    status = models.CharField(max_length=40)
    def __str__(self):
        return self.dataName + " " + f'caseId: {self.caseId}'


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


# class UserProfile(models.Model):
#     # resources = models.ForeignKey(
#     #     Resources, blank=True, null=True, on_delete=models.CASCADE)
#
#     # userName = models.CharField(max_length=40, null=True, blank=True)
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     username = models.CharField(max_length=20, default='')
#     password = models.CharField(max_length=20, default='')
#     uID = models.IntegerField(default=000000)
#     fName = models.CharField(max_length=40, default='') 
#     lName = models.CharField(max_length=40, default='')
#     nmlsID = models.IntegerField(default=000000)  # could not tell what the variable name is supposed to be
#     ssn = models.IntegerField(default=000000)
#     is_superuser = models.IntegerField(default =0)
#     is_staff = models.IntegerField(default =0)
#     is_active = models.IntegerField(default =1)
#
#
#     def __str__(self):
#         return str(self.fName)


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



class Lender(models.Model):
    company = models.CharField('Company', max_length=200, null=True, blank=True)
    #state = models.CharField('State', max_length=200, null=True, blank=True)
    rating = models.CharField('Rating', max_length=2, null=True, blank=True)
    programs = models.CharField('Programs', max_length=200, null=True, blank=True)

    lender_FHA_ID = models.CharField('Lender FHA ID', max_length=20, null=True, blank=True)
    lender_VA_ID = models.CharField('Lender VA ID', max_length=20, null=True, blank=True)
    account_executive = models.CharField('Account Executive', max_length=20, null=True, blank=True)
    phone_num = models.CharField('Phone', max_length=30, null=True, blank=True)
    email = models.EmailField('Email', blank=True)
    #website = models.CharField('Website', max_length=200, null=True, blank=True)
    website = models.URLField('Website', null=True, blank=True)

    def __str__(self):
        return f"{self.company}"

# class Lender(models.Model):
#     company = models.CharField('Company', max_length=200, null=True, blank=True)
#     #state = models.CharField('State', max_length=200, null=True, blank=True)
#     rating = models.CharField('Rating', max_length=2, null=True, blank=True)
#     programs = models.CharField('Programs', max_length=200, null=True, blank=True)
#
#     lender_FHA_ID = models.CharField('Lender FHA ID', max_length=20, null=True, blank=True)
#     lender_VA_ID = models.CharField('Lender VA ID', max_length=20, null=True, blank=True)
#     account_executive = models.CharField('Account Executive', max_length=20, null=True, blank=True)
#     phone_num = models.CharField('Phone', max_length=30, null=True, blank=True)
#     email = models.EmailField('Email', blank=True)
#     #website = models.CharField('Website', max_length=200, null=True, blank=True)
#     website = models.URLField('Website', null=True, blank=True)
#
#     def __str__(self):
#         return f"{self.company}"

class LenderLogo(models.Model):
    company = models.CharField('Company', max_length=200, null=True, blank=True)
    logo = models.ImageField(null=True, blank=True, upload_to="images/")

    def __str__(self):
         return self.company

class Bio(models.Model):
    title = models.CharField('Title', max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title


class BorrowerNote(models.Model):
   borrower=models.ForeignKey(Borrower,on_delete=models.CASCADE)
   note=models.TextField('Note',blank=True, max_length=200)
   created_on=models.DateTimeField(auto_now_add=True)

   def __str__(self):
        return self.note
class LeadNote(models.Model):
    lead=models.ForeignKey(Lead,on_delete=models.CASCADE)
    note = models.TextField('Note', max_length=200,blank=True)
    created_on=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.note
        
# class AccountDetail(models.Model):
#     ssn = models.ForeignKey(CustomUser, blank = True, null = True, on_delete=models.CASCADE)
#     details = models.TextField('Account Information', blank = True, max_length = 200)
#
#     def __str__(self):
#         return self.ssn
