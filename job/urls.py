from django.urls import path

from . import views

urlpatterns = [
    path('', views.JobsView.as_view()),
    path('<int:pk>/', views.JobsDetailsView.as_view()),
    path('<int:pk>/apply/', views.ApplicationView.as_view()),
]