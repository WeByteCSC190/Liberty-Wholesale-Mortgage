from django.contrib import admin
from .models import RecentBorrowers, RecentLeads

# Register your models here.
admin.site.register(RecentBorrowers)
admin.site.register(RecentLeads)