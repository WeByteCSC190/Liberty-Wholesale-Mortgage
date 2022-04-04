from django.db import models


# Create your models here.

class Dashboard(models.Model):
    leads=models.CharField(max_length=120)
    borrowers=models.CharField(max_length=120)
    title=models.CharField(max_length=120)
    description = models.TextField()

    def _str_(self):
        return self.title
