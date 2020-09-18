from django.urls import path
from challenge import views

urlpatterns = [
    path('', views.ChallengeView.as_view()),
    path('domains/', views.DomainView.as_view()),
    path('<slug:challenge_slug>/join/', views.JoinChallengeView.as_view()),
    path('<slug:challenge_slug>/myteam/', views.MyTeamView.as_view()),
    path('<slug:challenge_slug>/teams/', views.ChallengeTeamView.as_view()),
    path('<slug:slug>/', views.ChallengeDetailView.as_view()),
    path('<slug:challenge_slug>/end/', views.EndChallengeView.as_view()),
    path('<slug:challenge_slug>/submission_link/', views.SubmissionLinkChallengeView.as_view()),
    path('user/dashboard/', views.UserDashboardView.as_view()),
]
