from django.urls import path

from challenge import views

urlpatterns = [
    path('', views.ChallengeView.as_view()),
    path('<slug:slug>/', views.ChallengeDetailView.as_view()),
    path('domains/', views.DomainView.as_view())
]