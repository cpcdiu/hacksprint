from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='adminpanel'),
    path('users/', views.users, name='admin-users'),
    path('settings/', views.settings, name='admin-settings')
]
