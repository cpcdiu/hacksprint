from django.urls import path, include, re_path

from main import views as main_views
from userpanel import views as user_views


urlpatterns = [
    path('api/login/', main_views.CustomAuthToken.as_view()),
    path('api/register/', main_views.SignUpView.as_view()),
    path('api/change-password/', main_views.ChangePasswordView.as_view()),
    path('api/user/', user_views.UserView.as_view()),
    path('api/dashboard/', user_views.DashboardView.as_view()),
    path('api/challenges/', user_views.ChallengesView.as_view()),
    path('api/tracks/', user_views.TrackView.as_view()),
    path('api/tracks/<int:track_id>/', user_views.SingleTrackView.as_view()),
    path('api/tracks/<int:track_id>/<int:practice_id>/', user_views.SinglePracticeView.as_view()),
    path('api/jobs/', user_views.JobsView.as_view()),
    path('api/notifications/', user_views.NotificationView.as_view()),
    path('api/profile/', user_views.ProfileView.as_view()),
    path('api/addwork/', user_views.AddWorkView.as_view()),
    path('api/addeducation/', user_views.AddEducationView.as_view()),
    path('api/profile/<int:pid>', user_views.PublicProfileView.as_view()),
    path('api/settings/', user_views.SettingsView.as_view()),

    path('admin/', include('adminpanel.urls')),
    path('confirm/', main_views.verify_email, name='verify-email'),
    path('reset-password/', main_views.reset_password, name='reset-password'),

    re_path('.*', main_views.index, name='index'),
    path('', main_views.index, name='index'),

    # re_path(r'^(?P<path>.*)/$', main_views.index),
    # path('', main_views.index),
]
