from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('clients.urls')),
    path('', include('accounts.urls'))
]
