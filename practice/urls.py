from django.urls import path
from practice import views

urlpatterns = [
    path('', views.PracticeView.as_view()),
    path('tracks/', views.TrackView.as_view()),
    path('<slug:track_slug>/', views.SingleTrackView.as_view()),
    path('<slug:track_slug>/<slug:practice_slug>/', views.SinglePracticeView.as_view()),
]
