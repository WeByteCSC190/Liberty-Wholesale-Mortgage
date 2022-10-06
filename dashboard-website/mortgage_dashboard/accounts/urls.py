from django.urls import path, include
from .views import SignupView, GetCSRFToken, LogoutView, LoginView, CheckAuthenticatedView, DeleteAccountView, GetUsersView

urlpatterns = [

    path('delete', DeleteAccountView.as_view()),
    path('authenticated', CheckAuthenticatedView.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('register', SignupView.as_view()),
    path('csrf_cookie',GetCSRFToken.as_view()), 
    path('getUsers', GetUsersView.as_view()),
          
    # path('api-auth/', include('rest_framework.urls')),
    # path('api/', include('api.urls')),
    # path('accounts/', include('')) 
]