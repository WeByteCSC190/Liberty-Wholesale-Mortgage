from unicodedata import name
from django.urls import path, include
from .views import ClientView, AddClient, LeadView, AddLead, LenderView, LenderLogoView,BioView,RecyclingBinView
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
router.register(r'recentBorrowers',views.RecentBorrowerViewSet) #shows only 3 recent borrowers
router.register(r'ImportantAnnoucements',views.ImportantAnnoucementsViewSet) #shows most important Annoucements based on dates
router.register(r'recentLeads',views.RecentLeadsViewSet) #shows only 3 recent leads
router.register(r'lender',views.LenderViewSet)        
router.register(r'lenderLogo', views.LenderLogoViewSet)  
router.register(r'Annoucements',views.AnnoucementsViewSet)
router.register(r'bio',views.BioViewSet)
router.register(r'resources',views.ResourceView)
router.register(r'recyclingBin',views.RecyclingBinViewSet)

urlpatterns = [
    path('get-leads', LeadView.as_view() ),

    path('add_lead', AddLead),
    path('get-borrowers',ClientView.as_view() ),
    path('borrowerview', views.BorrowerView.as_view()),
    path('add_client', AddClient),
    path('recent_borrowers', ClientView.as_view()),
    path('get-lender', LenderView.as_view()),
    path('get-lenderLogo', LenderLogoView.as_view()),
    path('get-bio', BioView.as_view()),
    path('recent_leads',ClientView.as_view()),
    path('userList/',views.listAll, name='userList'),
    path('userDetails/<int:pk>/',views.userDetail, name='userDetail'),
    path('userCreate/',views.createUser, name='userCreate'),
    path('userUpdate/<int:pk>/',views.updateUser, name='userUpdate'),
    path('userDelete/<int:pk>/',views.deleteUser, name='userDelete'),
    path('bio-detail/<int:pk>/',views.bioDetail, name='bio-detail'),
    path('bio-list/',views.bioList, name='bio-list'),
    path('bio-create/',views.bioCreate, name='bio-create'),
    path('bio-update/<int:pk>/',views.bioUpdate, name='bio-update'),
    path('bio-delete/<int:pk>/',views.bioDelete, name='bio-delete'),
    path('borrower-delete/<int:pk>/',views.borrowerDelete, name='borrower-delete'),
    path('borrower-recover/<int:pk>/',views.borrowerRecover, name='borrower-recover'),
    path('lead-delete/<int:pk>/',views.leadDelete, name='lead-delete'),
    path('lead-recover/<int:pk>/',views.leadRecover, name='lead-recover'),
    path('recyclingBin-delete/<int:pk>/',views.binDelete, name='recycleingBin-delete'),
    path('get-recyclebin', RecyclingBinView.as_view()),
    
    #automatic URL routing
    path('',include(router.urls)),
    path('api/', include('rest_framework.urls', namespace='rest_framework'))

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
