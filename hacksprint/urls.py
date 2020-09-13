from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path

from main import views as main_views
from userpanel import views as user_views

urlpatterns = [
    path('api/login/', main_views.CustomAuthToken.as_view()),
    path('api/register/', main_views.SignUpView.as_view()),
    path('api/change-password/', main_views.ChangePasswordView.as_view()),
    path('api/user/', user_views.UserView.as_view()),
    path('api/dashboard/', user_views.DashboardView.as_view()),
    path('api/challenges/', include('challenge.endpoints')),
    path('api/tracks/', user_views.TrackView.as_view()),
    path('api/tracks/<slug:track_slug>/', user_views.SingleTrackView.as_view()),
    path('api/tracks/<slug:track_slug>/<slug:practice_slug>/',
         user_views.SinglePracticeView.as_view()),
    path('api/practices/', user_views.PracticeView.as_view()),

    path('api/jobs/', user_views.JobsView.as_view()),
    path('api/notifications/', user_views.NotificationView.as_view()),
    path('api/profile/', user_views.ProfileView.as_view()),
    path('api/addwork/', user_views.AddWorkView.as_view()),
    path('api/addeducation/', user_views.AddEducationView.as_view()),
    path('api/profile/<int:pid>', user_views.PublicProfileView.as_view()),
    path('api/settings/', user_views.SettingsView.as_view()),
    path('api/jobs/', include('job.endpoints')),

    path('admin/', include('adminpanel.urls')),
    path('confirm/', main_views.verify_email, name='verify-email'),
    path('reset-password/', main_views.reset_password, name='reset-password'),
    path('nimda/', admin.site.urls),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

urlpatterns += [
    re_path('.*', main_views.index, name='index'),
]
