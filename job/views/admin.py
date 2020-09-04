from django.contrib.auth.decorators import user_passes_test
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

from job.form import JobForm


def index(request):
    return render(request, 'job/jobs.html')


def new_jobs(request):
    form = JobForm()
    return render(request, 'job/job-add.html', {'form': form})
