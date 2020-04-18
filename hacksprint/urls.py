from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from main import views as main_views
from userpanel import views as user_views
from adminpanel import views as admin_views

urlpatterns = [
    path('', main_views.index, name='home'),
    path('login/', main_views.login_fn, name='login'),
    path('logout/', main_views.logout_fn, name='logout'),
    path('register/', main_views.register_fn, name='register'),

    path('admin/', include('adminpanel.urls')),

    path('profile/', user_views.profile, name='profile'),
    path('settings/', user_views.settings, name='settings'),
    path('challenges/', user_views.challenges, name='challenges'),
    path('practice/', user_views.practices, name='practice'),
    path('jobs/', user_views.jobs, name='jobs'),
    path('notifications/', user_views.notification, name='notification')
]
