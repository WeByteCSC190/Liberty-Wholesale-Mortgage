from import_export.admin import ImportExportModelAdmin
from django.contrib import admin
from import_export import resources
from . models import *

# Register your models here.
# admin.site.register(UserProfile)
admin.site.register(Client)
admin.site.register(News)
admin.site.register(Announcements)
admin.site.register(Files)

admin.site.register(Media)
# admin.site.register(Video)
admin.site.register(Resources)
# admin.site.register(Status)
admin.site.register(Lead)
admin.site.register(Borrower)
admin.site.register(MileStone)
admin.site.register(LoanOfficer)
admin.site.register(LoanProcessor)

admin.site.register(Bio)
admin.site.register(RecyclingBin)
admin.site.register(BorrowerNote)
#admin.site.register(LeadNote)

class LenderResources(resources.ModelResource):
    class Meta:
        model = Lender

class LenderAdmin(ImportExportModelAdmin):
    resource_class = LenderResources
    list_display = ("company",)
    search_fields = ['company', 'programs']

admin.site.register(Lender, LenderAdmin)

class LenderLogoAdmin(admin.ModelAdmin):
    list_display = ['company', 'logo']

admin.site.register(LenderLogo, LenderLogoAdmin)





