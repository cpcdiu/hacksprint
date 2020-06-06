from django.urls import path
from . import views

# ALL ADMIN ROUTES
urlpatterns = [
    path('', views.index, name='adminpanel'),
    path('login/', views.admin_login, name='admin-login'),
    path('users/', views.users, name='admin-users'),
    path('create/', views.createUser, name='create-user'), 
    path('edit/', views.editUser, name='edit-user'),
    path('delete/', views.deleteUser, name='delete-user'),       
    path('users/<str:action>/<int:uid>/', views.user_action, name='user-action'),
    path('challenges/', views.challenges),
    path('tracks/', views.tracks, name='tracks'),
    path('tracks/<int:id>', views.single_track, name='single-track'),
    path('settings/', views.settings, name='admin-settings')
]
