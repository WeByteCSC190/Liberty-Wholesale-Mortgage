from unicodedata import name
from django.urls import path, include
from .views import *
from . import views
from django.conf import settings
from django.conf.urls.static import static


from rest_framework import routers
##  These URL patterns define the API endpoints
##  The views.py will contain sample functions
##  Which should show how to handle these.
##  After defining these, we can then use these
##  by calling the fetch function in the frontend
##  Which will grab the output from the endpoint. 

router=routers.DefaultRouter()
router.register(r'leads',views.LeadViewSet) #shows all leads
router.register(r'borrowers',views.BorrowerViewSet) #shows all borrowers
router.register(r'ImportantAnnouncements',views.ImportantAnnouncementsViewSet) #shows most important Announcements based on dates
router.register(r'Announcements',views.AnnouncementsViewSet)
router.register(r'lender',views.LenderViewSet)        
router.register(r'lenderLogo', views.LenderLogoViewSet)  
router.register(r'bio',views.BioViewSet)
router.register(r'resources',views.ResourceViewSet)
router.register(r'recyclingBin',views.RecyclingBinViewSet)
router.register(r'borrowernote',views.BorrowerNoteViewSet)
router.register(r'leadnote',views.LeadNoteViewSet)
router.register(r'status',views.StatusViewSet)
router.register(r'files',views.FileViewSet)
router.register(r'media',views.VideoViewSet)
urlpatterns = [

    #automatic URL routing
    path('',include(router.urls)),
    path('api/', include('rest_framework.urls', namespace='rest_framework'))

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
