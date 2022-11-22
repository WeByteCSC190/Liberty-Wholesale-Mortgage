from unicodedata import name
from django.urls import path, include
from . import views
from .views import ClientView, LeadView, LenderView,LenderLogoView,BioView,RecyclingBinView,LeadNoteView, BorrowerNoteView, FileView, VideoView, AnnouncementsView, ResourceView, ImportantAnnouncementsView
from django.conf import settings
from django.conf.urls.static import static


from rest_framework import routers
##  These URL patterns define the API endpoints
##  The views.py will contain sample functions
##  Which should show how to handle these.
##  After defining these, we can then use these
##  by calling the fetch function in the frontend
##  Which will grab the output from the endpoint. 

router=routers.SimpleRouter()
router.register(r'leads',views.LeadView) #shows all leads
router.register(r'borrowers',views.BorrowerView) #shows all borrowers
# router.register(r'recentBorrowers',views.RecentBorrowerView) #shows only 3 recent borrowers
router.register(r'ImportantAnnouncements',views.ImportantAnnouncementsView) #shows most important Annoucements based on dates
# router.register(r'recentLeads',views.RecentLeadsView) #shows only 3 recent leads
router.register(r'lender',views.LenderView)        
router.register(r'lenderLogo', views.LenderLogoView)  
router.register(r'Announcements',views.AnnouncementsView)
router.register(r'bio',views.BioView)
router.register(r'resources',views.ResourceView)
router.register(r'recyclingBin',views.RecyclingBinView)
router.register(r'borrowernote',views.BorrowerNoteView)
router.register(r'leadnote',views.LeadNoteView)
router.register(r'files', views.FileView)
router.register(r'videos', views.VideoView)

urlpatterns = [
   #  path('add_client', AddClient),
   #  path('get-lenderLogo', LenderLogoView.as_view()),
   #  path('get-bio', BioView.as_view()),
   #  path('userList/',views.listAll, name='userList'),
   #  path('userDetails/<int:pk>/',views.userDetail, name='userDetail'),
   #  path('bio-detail/<int:pk>/',views.bioDetail, name='bio-detail'),
   #  path('bio-list/',views.bioList, name='bio-list'),
   #  path('bio-create/',views.bioCreate, name='bio-create'),
   #  path('bio-update/<int:pk>/',views.bioUpdate, name='bio-update'),
   #  path('bio-delete/<int:pk>/',views.bioDelete, name='bio-delete'),
   #  path('recyclingBin-delete/<int:pk>/',views.recyclingBinDelete, name='recycleingBin-delete'),
   #  path('get-recyclebin', RecyclingBinView.as_view(), name='recyclebin'),

    #automatic URL routing
    path('',include(router.urls)),
    path('api/', include('rest_framework.urls', namespace='rest_framework'))

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
