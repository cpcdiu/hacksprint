from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

from main import views as main_views
from userpanel import views as user_views

urlpatterns = [
    path('', main_views.index, name='index'),

    path('login/', obtain_auth_token),
    path('dashboard/', user_views.IndexView.as_view()),
    path('challenges/', user_views.ChallengesView.as_view()),
    path('tracks/', user_views.TrackView.as_view()),
    path('practice/', user_views.PracticeView.as_view()),
    path('jobs/', user_views.JobsView.as_view()),
    path('notifications/', user_views.NotificationView.as_view()),
    path('profile/', user_views.ProfileView.as_view()),
    path('settings/', user_views.SettingsView.as_view()),

    path('admin/', include('adminpanel.urls')),

    path('p/home/', main_views.home, name='home'),
    path('p/login/', main_views.login_fn, name='login'),
    path('p/logout/', main_views.logout_fn, name='logout'),
    path('p/register/', main_views.register_fn, name='register'),

    path('p/profile/', user_views.profile, name='profile'),
    path('p/settings/', user_views.settings, name='settings'),
    path('p/challenges/', user_views.challenges, name='challenges'),
    path('p/practice/', user_views.practices, name='practice'),
    path('p/jobs/', user_views.jobs, name='jobs'),
    path('p/notifications/', user_views.notification, name='notification')
]
