from django.urls import path, include
# from .viewsets import LoginViewSet, RegistrationViewSet, RefreshViewSet
from rest_framework_simplejwt.serializers import (
  TokenObtainPairSerializer,
)
from rest_framework_simplejwt.views import (
  TokenObtainPairView,
  TokenRefreshView,
  TokenVerifyView,
)
# from .views import SignupView, GetCSRFToken, LogoutView, LoginView, CheckAuthenticatedView, DeleteAccountView, GetUsersView
# from .viewsets import RegistrationViewSet, LoginViewSet, RefreshViewSet

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer

urlpatterns = [

    path('token', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify', TokenVerifyView.as_view(), name='token_verify'),
    path('users/', include('new_users.urls')),
    # path('register', RegistrationViewSet, name='auth-register'),
    # path('register', SignupView.as_view()),
    # path('getUsers', GetUsersView.as_view()),
]
