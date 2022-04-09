from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('leads', index),
    path('borrowers', index),
    path('dashboard', index),
    path('login', index),
    path('logout', index),
    path('resources', index),
    path('account', index),
]
