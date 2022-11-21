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
router.register(r'recentBorrowers',views.RecentBorrowerViewSet) #shows only 3 recent borrowers
router.register(r'ImportantAnnoucements',views.ImportantAnnoucementsViewSet) #shows most important Annoucements based on dates
router.register(r'recentLeads',views.RecentLeadsViewSet) #shows only 3 recent leads
router.register(r'lender',views.LenderViewSet)        
router.register(r'lenderLogo', views.LenderLogoViewSet)  
router.register(r'Annoucements',views.AnnoucementsViewSet)
router.register(r'bio',views.BioViewSet)
router.register(r'resources',views.ResourceView)
router.register(r'recyclingBin',views.RecyclingBinViewSet)
router.register(r'borrowernote',views.borrowerNoteViewSet)
router.register(r'leadnote',views.LeadNoteViewSet)
router.register(r'status',views.StatusViewSet)
router.register(r'files',views.FilesViewSet)
router.register(r'media',views.VideoViewSet)
urlpatterns = [
    path('get-leads', LeadView.as_view(), name='lead' ),
    path('statusview',StatusView.as_view(),name='statusview'),
    path('add_lead', AddLead),
    path('get-borrowers',ClientView.as_view() ),
    path('borrowerview', views.BorrowerView.as_view(), name='borrower'),
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
    path('borrower-delete/<int:pk>/',BorrowerDelete.as_view(), name='borrower-delete'),
    path('borrower-recover/<int:pk>/',BorrowerRecover.as_view(), name='borrower-recover'),
    path('lead-delete/<int:pk>/',LeadDelete.as_view(), name='lead-delete'),
    path('lead-recover/<int:pk>/',LeadRecover.as_view(), name='lead-recover'),
    path('recyclingBin-delete/<int:pk>/',views.recyclingBinDelete, name='recycleingBin-delete'),
    path('get-recyclebin', RecyclingBinView.as_view(), name='recyclebin'),
    path('accountDetail-delete/<int:pk>',views.delAccountDetail,name='accountDetail-del'),
    path('accountDetail-Create',views.createAccountDetail,name='accountDetail-create'),
    path('accountDetail-update/<int:pk>',views.updateAccountDetail,name='accountDetail-update'),
    path('updateAccount/<int:pk>',views.updateAccount,name='account-update'),

    path('borrowernote-list/',views.borrowernote_list, name='borrowernote-list'),
    path('borrowernote-list/<int:pk>/',views.borrowernote_detail, name='borrowerNote-create'),
    path('leadnote-list/',views.leadnote_list, name='leadnote-list'),
    path('leadNote-list/<int:pk>/',views.leadnote_detail, name='leadNote-create'),

    path('lender-detail/<int:pk>/',views.lenderDetail, name='lender-detail'),
    path('lender-list/',views.lenderList, name='lender-list'),
    path('lender-create/',views.lenderCreate, name='lender-create'),
    path('lender-update/<int:pk>/',views.lenderUpdate, name='lender-update'),
    path('lender-delete/<int:pk>/',views.lenderDelete, name='lender-delete'),

    path('resource-list/',views.resource_list, name='Resource-list'),
    path('resource-list/<int:pk>/',views.resource_detail, name='Resource-create'),
    path('borrowerupdate/<int:pk>/',views.borrowers_detail, name='updateborrower'),
    path('leadupdate/<int:pk>/',views.leads_detail, name='updatelead'),
    path('videolist/',VideoListView.as_view(), ),
    path('videolist/<int:pk>/',VideoDetail.as_view(), ),
    path('fileslist/',FilesListView.as_view(), ),
    path('fileslist/<int:pk>/',FilesDetail.as_view(), ),
    path('imagelist/',ImageListView.as_view(), ),
    path('imagelist/<int:pk>/',ImageDetail.as_view(), ),
    #automatic URL routing
    path('',include(router.urls)),
    path('api/', include('rest_framework.urls', namespace='rest_framework'))

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
