from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="jobs"),
    path('new/', views.new_jobs, name="new-jobs"),


]