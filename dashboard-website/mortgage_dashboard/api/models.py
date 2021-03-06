from tarfile import LENGTH_NAME
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

class News(models.Model):
    desc = models.TextField('Description', blank =True )
    def __str__(self):
        return self.desc

class Anouncements(models.Model):
    desc = models.TextField('Description', blank =True )
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
    media = models.ForeignKey(Media, blank=True, null = True, on_delete=models.CASCADE)
    files = models.ForeignKey(Files, blank=True, null = True, on_delete=models.CASCADE)
    announcements = models.ForeignKey(Anouncements, blank=True, null = True, on_delete=models.CASCADE)
    news = models.ForeignKey(News, blank=True, null = True, on_delete=models.CASCADE)

    id = models.IntegerField('ID',primary_key = True, null=False, default=generate_random_number(), unique=True )
    name = models.CharField('Name', max_length=40, null=True, blank =True)
    
    def __str__(self):
        return self.id


class Status(models.Model):
    # lead = models.ForeignKey(Lead, blank=True, null = True)
    # borrower = models.ForeignKey(Lead, blank=True, null= True)
    status = models.CharField('Status', primary_key = True, max_length=12, null=False, blank =True)
    id= models.IntegerField('ID', null=False, default=generate_random_number(), unique=True )
    name = models.CharField('Name', max_length=40, null=True, blank =True)
    desc = models.TextField('Description', blank =True )

    def __str__(self):
        return self.id
    
class Lead(models.Model):
    creditScore = models.IntegerField('Credit Score', null=False, default=generate_random_number(), unique=True )
    status = models.ForeignKey(Status, blank=True, null = True, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.creditScore

class Borrower(models.Model):
    status = models.ForeignKey(Status, blank=True, null = True, on_delete=models.CASCADE)
   
    def __str__(self):
        return self.status

class MileStone(models.Model):
    id= models.IntegerField('ID',primary_key = True, null=False, default=generate_random_number(), unique=True )
    name = models.CharField('Name', max_length=40, null=True, blank =True)
    desc = models.TextField('Description', blank =True )
    
    def __str__(self):
        return self.id

class LoanProcessor(models.Model):
    mileStone = models.ForeignKey(MileStone, blank=True, null = True, on_delete=models.CASCADE)
    pTitle = models.CharField( max_length=40, null=True, blank =True)
    
    def __str__(self):
        return self.mileStone
        

class LoanOfficer(models.Model):
    mileStone = models.ForeignKey(MileStone, blank=True, null = True, on_delete=models.CASCADE)

    oTitle = models.CharField( max_length=40, null=True, blank =True)

    def __str__(self):
        return self.mileStone

class User(models.Model):
    resources = models.ForeignKey(Resources, blank=True, null = True, on_delete=models.CASCADE)

    userName = models.CharField( max_length=40, null=True, blank =True)
    password = models.CharField( max_length= 20, null=True, blank = True)
    uID = models.IntegerField( null=False, default=generate_random_number(), unique=True )
    fName = models.CharField( max_length=40, null=True, blank =True)
    lName = models.CharField( max_length=40, null=True, blank =True)
    nmlsID = models.IntegerField( null=False, default=generate_random_number(), unique=True ) ###could not tell what the variable name is supposed to be
    ssn =  models.IntegerField(  null=False, blank =False)

    def __str__(self):
        return self.fName

class Client(models.Model):
    #this is a template model, ex. cid needs to have a default value
    resources = models.ForeignKey(Resources, blank=True, null = True, on_delete=models.CASCADE)

    cID = models.IntegerField(null=False, default=generate_random_number(), unique=True )
    fName = models.CharField('First Name', max_length=40, null=True, blank =True)
    lName = models.CharField('Last Name', max_length=40, null=True, blank =True)
    email = models.EmailField('Email Address')
    phone_num = models.CharField('Phone Number', max_length=16, null=True)

    def __str__(self):
        return self.cID