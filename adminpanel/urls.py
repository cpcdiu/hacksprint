from django.urls import path, include
from . import views

# ALL ADMIN ROUTES
urlpatterns = [
    path('', views.index, name='adminpanel'),
    path('logout/', views.admin_logOut, name='logOut'),  # For logging out adming
    path('login/', views.admin_login, name='admin-login'),  # For admin login
    path('users/', views.users.as_view(), name='admin-users'),  # View all users of this system

    path('tracks/', views.tracks, name='tracks'),  # READ all Tracks, CREATE new track
    path('tracks/<str:action>/<slug:slug>/', views.track_action, name='track-action'),  # READ, UPADTE, DELETE
    path('tracks/<slug:slug>/', views.single_track, name='single-track'),  # READ all the practice of  a single track
    path('subdomain/new/<slug:slug>/', views.subdomain_add, name='subdomain-new'),  # CREATE new subdomain

    path('practice/<slug:slug>/', views.single_practice, name='single-practice'),  # READ a single practice
    path('practice/new/<slug:track_slug>/', views.practice_add, name='practice-new'),  # CREATE a new practice
    path('practice/<str:action>/<slug:slug>/', views.practice_action, name='practice-action'),  # EDIT, DELETE

    path('challenges/', include('challenge.urls')),  # Challenges Routes
    path('settings/', views.settings, name='admin-settings'),  # For settings page (Incomplete)
    path('profile/', views.profile, name='admin-profile'),  # READ the profile page
]
