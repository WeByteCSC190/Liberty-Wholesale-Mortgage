from datetime import datetime
from sqlite3 import Date
from tarfile import LENGTH_NAME
from xmlrpc.client import DateTime
from django.db import models
from django.db.models import OuterRef, Subquery
import random
from django.db import models
from django.conf import settings
from django.utils import timezone
from django.utils.translation import gettext_lazy as lazy
from django.core.validators import FileExtensionValidator

from users.models import CustomUser

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

class Files(models.Model):
    file = models.FileField(upload_to='files_uploaded',null=True,
        validators=[FileExtensionValidator(allowed_extensions=['doc','pdf','docx','txt'])])
    date_uploaded = models.DateTimeField(auto_now_add = True )
    # id = models.IntegerField('ID', primary_key=True, null=False,
                             # default=generate_random_number(), unique=True)
    def __int__(self):
        return self.file

class Images(models.Model):
    images = models.FileField(upload_to='images_uploaded',null=True,
        validators=[FileExtensionValidator(allowed_extensions=['JPEG','GIF','PNG','JPG'])])
    date_uploaded = models.DateTimeField(default=timezone.now)
   
    id = models.IntegerField('ID', primary_key=True, null=False,
                             default=generate_random_number(), unique=True)
    def __int__(self):
        return self.id


class Media(models.Model):
    link = models.URLField('Website Address')

    def __str__(self):
        return self.link

class Video(models.Model):
    # video = models.FileField(upload_to='videos_uploaded',null=True,
        # validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])
    link = models.URLField(max_length=200, null=True)
    date_uploaded = models.DateTimeField(default=timezone.now)
    # user = models.ForeignKey(User,on_delete= models.CASCADE)
    # id = models.IntegerField('ID', primary_key=True, null=False,
                             # default=generate_random_number(), unique=True)
    def __int__(self):
        return self.link
   

# class Resources(models.Model):
#     media = models.ForeignKey(
#         Media, blank=True, null=True, on_delete=models.CASCADE)
#     files = models.ForeignKey(
#         Files, blank=True, null=True, on_delete=models.CASCADE)
#     announcements = models.ForeignKey(
#         Anouncements, blank=True, null=True, on_delete=models.CASCADE)
#     news = models.ForeignKey(
#         News, blank=True, null=True, on_delete=models.CASCADE)

#     id = models.IntegerField('ID', primary_key=True, null=False,
#                              default=generate_random_number(), unique=True)
#     name = models.CharField('Name', max_length=40, null=True, blank=True)
#     video = models.ForeignKey(Video, blank=True, null=True, on_delete=models.CASCADE)

#     def __int__(self):
#         return self.id

class Status(models.Model):

    STATUS_CHOICES = [
        ('Lead', (
            ('Application_Complete', lazy('Application Complete')),
            ('Recently_Added', lazy('Recently Added')),
            ('Contacted', lazy('Contacted')),
            ('Declined', lazy('Declined')),
            ('In_Progress', lazy('In Progress')),
            ('Missing_Paperwork', lazy('Missing Paperwork')),
            ('Move_to_Borrower', lazy('Move to Borrower')),),
        ),
        ('Borrower', (
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
            ('Closing_Package_Sent', lazy('Closing Package Sent')),),
        )
    ]
    
    status = models.CharField(
        choices = STATUS_CHOICES, max_length=40, null=False, blank=True)
    id = models.IntegerField(
        'ID', primary_key=True, null=False, default=generate_random_number(), unique=True)
    name = models.CharField('Name', max_length=40, null=True, blank=True)
    desc = models.TextField('Description', blank=True)

    def __str__(self):
        return str(self.id)

class Announcements(models.Model):
     date=models.DateTimeField('Date')
     content=models.TextField('Content',blank=True)

     def __str__(self):
         return str(self.date)+" "+str(self.content)

class Lead(models.Model):
    # resources = models.ForeignKey(
        # Resources, blank=True, null=True, on_delete=models.CASCADE)

    caseId = models.IntegerField(
        'Case ID', primary_key=True, null=False, default=generate_random_number(), unique=True)
    date = models.DateTimeField(auto_now_add = True)
    fName = models.CharField(max_length=40, null=True, blank=True)
    lName = models.CharField(max_length=40, null=True, blank=True)
    creditScore = models.IntegerField(
        'Credit Score', blank=True, null=True, unique=False)
    email = models.EmailField('Email Address')
    phone_num = models.CharField('Phone Number', max_length=16, null=True)
    status = models.ForeignKey(
        Status, blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f'caseId: {self.caseId}'


class Borrower(models.Model):
    caseId = models.IntegerField(
        'Case ID', primary_key=True, null=False, default=generate_random_number(), unique=True)
    date = models.DateTimeField(auto_now_add = True)
    fName = models.CharField(max_length=40, null=True, blank=True)
    lName = models.CharField(max_length=40, null=True, blank=True)
    creditScore = models.IntegerField(
        'Credit Score', null=False, default=generate_random_number(), unique=True)
    email = models.EmailField('Email Address')
    phone_num = models.CharField('Phone Number', max_length=16, null=True)
    status = models.ForeignKey(
       Status, blank=True, null=True, on_delete=models.CASCADE)
    

    
    def __str__(self):
        return self.fName

class RecyclingBin(models.Model):
    dataName = models.CharField('Data Name', max_length=30, null=True, blank=True)
    trashID = models.IntegerField(
        'trash ID', primary_key=True, null=False, default=generate_random_number(), unique=True)
    # resources = models.ForeignKey(
        # Resources, blank=True, null=True, on_delete=models.CASCADE)

    caseId = models.IntegerField(
        'Case ID', null=False, default=generate_random_number())
    date = models.DateTimeField('Date')
    fName = models.CharField(max_length=40, null=True, blank=True)
    lName = models.CharField(max_length=40, null=True, blank=True)
    creditScore = models.IntegerField(
        'Credit Score', blank=True, null=True, unique=False)
    email = models.EmailField('Email Address')
    phone_num = models.CharField('Phone Number', max_length=16, null=True)
    # status = models.ForeignKey(
    #     Status, blank=True, null=True, on_delete=models.CASCADE)

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

class Client(models.Model):
    # this is a template model, ex. cID needs to have a default value
    # resources = models.ForeignKey(
        # Resources, blank=True, null=True, on_delete=models.CASCADE)

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
   borrowernote=models.TextField('Note',blank=True)
   created_on=models.DateTimeField(auto_now_add=True)

   def __str__(self):
        return self.borrowernote
class LeadNote(models.Model):
    lead=models.ForeignKey(Lead,on_delete=models.CASCADE)
    leadnote = models.TextField('Note', max_length=200,null=True)
    created_on=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.leadnote
        
# class AccountDetail(models.Model):
#     ssn = models.ForeignKey(UserProfile, blank = True, null = True, on_delete=models.CASCADE)
#     details = models.TextField('Account Information', blank = True, max_length = 200)
#
#     def __str__(self):
#         return self.ssn
        


# class UserProfile(models.Model):
#   ROLE = (
#           ('Loan Processor', 'Loan Processor'),
#           ('Loan Officer', 'Loan Officer'),
#           )

#   user = models.OneToOneField(settings.AUTH_USER_MODEL,on_delete= models.CASCADE, primary_key=True, related_name='profile')
#   fName = models.CharField(max_length=40, default='') 
#   lName = models.CharField(max_length=40, default='')
#   uID = models.IntegerField(default=000000)
#   nmlsID = models.IntegerField(default=000000)
#   ssn = models.IntegerField(default=000000)
#   # email=models.EmailField(max_length=254, default='')
#   address_1 = models.CharField(max_length=128, default='')
#   address_2 = models.CharField(max_length=128, default='')
#   zip_code = models.CharField(max_length=5, default='')
#   role = models.CharField(max_length=40, choices=ROLE, default='')

#   def __str__(self):
#     return self.fName
