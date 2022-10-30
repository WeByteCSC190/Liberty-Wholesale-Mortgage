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
admin.site.register(Video)
admin.site.register(Resources)
admin.site.register(Status)
admin.site.register(Lead)
admin.site.register(Borrower)
admin.site.register(MileStone)
admin.site.register(LoanOfficer)
admin.site.register(LoanProcessor)

admin.site.register(LenderLogo)
admin.site.register(Bio)
admin.site.register(RecyclingBin)
class LenderResources(resources.ModelResource):
    class Meta:
        model = Lender

class LenderAdmin(ImportExportModelAdmin):
    resource_class = LenderResources
    list_display = ("company", "state")
    search_fields = ['company', 'state', 'programs']

admin.site.register(Lender, LenderAdmin)





