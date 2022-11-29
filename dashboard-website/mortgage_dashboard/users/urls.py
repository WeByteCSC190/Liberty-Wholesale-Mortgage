from django.urls import path
from .views import RegisterView, RetrieveUserView, UpdateProfileView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('info', RetrieveUserView.as_view()),
    # path('update', UpdateUserView.as_view()),
    path('update_profile/<int:pk>/', UpdateProfileView.as_view(), name='auth_update_profile'),
]
