from django.urls import path
from account import views as account_views

urlpatterns = [
    path('', account_views.TrackView.as_view()),
    path('practices/', account_views.PracticeView.as_view()),
    path('<slug:track_slug>/', account_views.SingleTrackView.as_view()),
    path('<slug:track_slug>/<slug:practice_slug>/', account_views.SinglePracticeView.as_view()),
]
