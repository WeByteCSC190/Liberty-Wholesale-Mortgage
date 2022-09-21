from unicodedata import name
from django.urls import path, include
from .views import ClientView, AddClient, LeadView, AddLead
from . import views


from rest_framework import routers
##  These URL patterns define the API endpoints
##  The views.py will contain sample functions
##  Which should show how to handle these.
##  After defining these, we can then use these
##  by calling the fetch function in the frontend
##  Which will grab the output from the endpoint.

router=routers.DefaultRouter()
router.register(r'leads',views.LeadViewSet)
router.register(r'borrowers',views.BorrowerViewSet)
router.register(r'recentBorrowers',views.RecentBorrowerViewSet)
router.register(r'recentLeads',views.RecentLeadsViewSet)
router.register(r'lender',views.LenderViewSet)

urlpatterns = [
    path('get-leads', LeadView.as_view() ),
    path('add_lead', AddLead),
    path('get-borrowers',ClientView.as_view() ),
    path('add_client', AddClient),
    path('recent_borrowers', ClientView.as_view()),
    path('get_lender', ClientView.as_view()),
    path('recent_leads',ClientView.as_view()),
    # path('',views.apiView, name='apiView'),
    path('userList/',views.listAll, name='userList'),
    path('userDetails/<int:pk>/',views.userDetail, name='userDetail'),
    path('userCreate/',views.createUser, name='userCreate'),
    path('userUpdate/<int:pk>/',views.updateUser, name='userUpdate'),
    path('userDelete/<int:pk>/',views.deleteUser, name='userDelete'),
    
    #automatic URL routing
    path('',include(router.urls)),
    path('api/', include('rest_framework.urls', namespace='rest_framework'))

]
