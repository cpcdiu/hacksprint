from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="jobs"),
    path('new/', views.new_jobs, name="new-jobs"),
    path('<str:operation>/<slug:jobslug>/', views.updateJobs, name="job-Update"),
    path('search-company/',views.companySearch, name="companySearch"),
]