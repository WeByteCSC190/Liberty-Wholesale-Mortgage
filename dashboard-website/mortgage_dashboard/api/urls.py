from django.urls import path
from .views import ClientView, AddClient

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

]
