from unicodedata import name
from django.urls import path
from .views import ClientView, AddClient
from . import views

##  These URL patterns define the API endpoints
##  The views.py will contain sample functions
##  Which should show how to handle these.
##  After defining these, we can then use these
##  by calling the fetch function in the frontend
##  Which will grab the output from the endpoint.


urlpatterns = [
    path('get-leads', ClientView.as_view() ),
    path('get-borrowers',ClientView.as_view() ),
    path('add_client', AddClient),

    # path('',views.apiView, name='apiView'),
    path('userList/',views.listAll, name='userList'),
    path('userDetails/<int:pk>/',views.userDetail, name='userDetail'),
    path('userCreate/',views.createUser, name='userCreate'),
    path('userUpdate/<int:pk>/',views.updateUser, name='userUpdate'),
    path('userDelete/<int:pk>/',views.deleteUser, name='userDelete')


]
