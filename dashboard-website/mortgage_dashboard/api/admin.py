from import_export.admin import ImportExportModelAdmin
from django.contrib import admin
from import_export import resources
from . models import *

# Register your models here.
admin.site.register(UserProfile)
admin.site.register(Client)
admin.site.register(News)
admin.site.register(Anouncements)
admin.site.register(Annoucements)
admin.site.register(Files)

admin.site.register(Media)
admin.site.register(Resources)
admin.site.register(Status)
admin.site.register(Lead)
admin.site.register(Borrower)
admin.site.register(MileStone)
admin.site.register(LoanOfficer)
admin.site.register(LoanProcessor)
admin.site.register(RecentBorrowers)
admin.site.register(RecentLeads)

class LenderResources(resources.ModelResource):
    class Meta:
        model = Lender

class LenderAdmin(ImportExportModelAdmin):
    resource_class = LenderResources

admin.site.register(Lender, LenderAdmin)





