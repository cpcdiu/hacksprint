from django.urls import path
from . import views

# ALL ADMIN ROUTES
urlpatterns = [
    path('', views.index, name='adminpanel'),
    path('logout/', views.admin_logOut, name='logOut'),
    path('login/', views.admin_login, name='admin-login'),
    path('users/', views.users, name='admin-users'),
    path('create/', views.createUser, name='create-user'), 
    path('edit/', views.editUser, name='edit-user'),
    path('delete/', views.deleteUser, name='delete-user'),
    path('users/<str:action>/<int:userid>/', views.user_action, name='user-action'),
    path('challenges/', views.challenges),
    path('tracks/', views.tracks, name='tracks'),
    path('tracks/<str:action>/<int:trackid>/', views.track_action, name='track-action'),
    path('tracks/<int:id>', views.single_track, name='single-track'),
    path('practice/<int:practiceid>', views.single_practice, name='single-practice'),
    path('practice/new/<int:trackid>/', views.practice_add, name='practice-new'),
    path('practice/<str:action>/<int:practiceid>/', views.practice_action, name='practice-action'),
    path('settings/', views.settings, name='admin-settings'),
    path('profile/', views.profile, name='admin-profile'),

]
