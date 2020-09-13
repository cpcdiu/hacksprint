from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="jobs"),
    path('new/', views.new_jobs, name="new-jobs"),
    path('<str:slug>/cv/', views.job_cvs, name="job_cvs"),
    path('<str:operation>/<slug:jobslug>/', views.updateJobs, name="job-Update"),
    path('search/', views.search, name="job-search"),
    path('<str:slug>/', views.job_details, name="job_details"),
]