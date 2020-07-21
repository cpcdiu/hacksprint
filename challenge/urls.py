from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='challenges'),
    path('new/', views.new_challenge, name='challenge-new')
]