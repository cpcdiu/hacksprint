from django.urls import path
from . import views

# /admin/
urlpatterns = [
    path('', views.index, name='adminpanel'),
    path('login/', views.admin_login, name='admin-login'),
    path('users/', views.users, name='admin-users'),
    path('users/<str:action>/<int:uid>/', views.user_action, name='user-action'),
    path('tracks/', views.tracks, name='tracks'),
    path('settings/', views.settings, name='admin-settings')
]
