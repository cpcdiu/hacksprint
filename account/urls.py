from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.CustomAuthToken.as_view()),
    path('register/', views.SignUpView.as_view()),
    path('change-password/', views.ChangePasswordView.as_view()),
    path('user/', views.UserView.as_view()),
    path('dashboard/', views.DashboardView.as_view()),
    path('profile/', views.ProfileView.as_view()),
    path('addwork/', views.AddWorkView.as_view()),
    path('addeducation/', views.AddEducationView.as_view()),
    path('profile/<int:pid>', views.PublicProfileView.as_view()),
    path('settings/', views.SettingsView.as_view()),
    path('confirm/', views.verify_email, name='verify-email'),
    path('reset-password/', views.reset_password, name='reset-password'),
    path('test/', views.test)
]
