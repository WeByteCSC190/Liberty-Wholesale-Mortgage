from django.db import models


# Create your models here.

class Dashboard(models.Model):
    leads=models.CharField(max_length=120)
    borrowers=models.CharField(max_length=120)
    title=models.CharField(max_length=120)
    description = models.TextField()

    def _str_(self):
        return self.title

class RecentBorrowers(models.Model):

    date = models.CharField('Date', max_length=10, null=True, blank=True)
    fname = models.CharField(
        'First Name', max_length=40, null=True, blank=True)
    lname = models.CharField('Last Name', max_length=40, null=True, blank=True)

    def __str__(self):
        return str(self.date)+" "+str(self.fname)+" "+str(self.lname)

class RecentLeads(models.Model):

    date = models.CharField('Date', max_length=10, null=True, blank=True)
    fname = models.CharField(
        'First Name', max_length=40, null=True, blank=True)
    lname = models.CharField('Last Name', max_length=40, null=True, blank=True)

    def __str__(self):
        return str(self.date)+" "+str(self.fname)+" "+str(self.lname)