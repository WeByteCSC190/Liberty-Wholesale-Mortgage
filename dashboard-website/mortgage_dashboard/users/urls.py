from django.urls import path, include
from .views import RegisterView, RetrieveUserView, UpdateProfileView, ListUserView, RetrieveUserMilestonesView
from rest_framework import routers

router=routers.DefaultRouter()
router.register(r'list',ListUserView) #shows all users

urlpatterns = [
    path('',include(router.urls)),
    path('register', RegisterView.as_view()),
    path('info', RetrieveUserView.as_view()),
    path('milestones', RetrieveUserMilestonesView.as_view()),
    # path('list', ListUserView.as_view()),
    # path('update', UpdateUserView.as_view()),
    path('update_profile/<int:pk>/', UpdateProfileView.as_view(), name='auth_update_profile'),
]
