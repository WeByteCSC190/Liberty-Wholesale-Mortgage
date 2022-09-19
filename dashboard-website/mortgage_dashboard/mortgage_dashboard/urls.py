from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('dashboard/', include('dashboard.urls')),

    path('api-auth/', include('rest_framework.urls')), 
    path('api/', include('api.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/', include('accounts.urls')),
    path('profile/', include('users.urls')), 
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
