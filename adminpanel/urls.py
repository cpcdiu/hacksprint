from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='adminpanel'),
    path('users/', views.users, name='admin-users'),
    path('users/<str:action>/<int:uid>/', views.user_action, name='user-action'),
    path('settings/', views.settings, name='admin-settings')
]
