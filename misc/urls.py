from django.urls import path
from misc import views


urlpatterns = [
    path('dashboard/', views.DashboardView.as_view())
]