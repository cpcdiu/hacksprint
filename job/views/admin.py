from django.contrib.auth.decorators import user_passes_test
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.core.serializers import serialize
from job.models import Job
from userpanel.models import User, Company
from job.models import Job, Application

from job.form import JobForm
import random
import datetime


def index(request):
    jobs = Job.objects.all()
    return render(request, 'job/jobs.html', {'jobs': jobs})


def new_jobs(request):
    if request.method == 'GET':
        form = JobForm()
        return render(request, 'job/job-add.html', {'form': form})
    elif request.method == 'POST':
        form = JobForm(request.POST)
        company = request.POST['company']
        if form.is_valid():
            job = form.save(commit=False)
            company = Company.objects.get(user__first_name=company)
            job.title = request.POST['title']
            job.description = request.POST['description']
            job.education_requirements = request.POST['education_requirements']
            job.experience_requirements = request.POST['experience_requirements']
            job.location = request.POST['location']
            job.salary_min = request.POST['salary_min']
            job.salary_max = request.POST['salary_max']
            job.vacancy = request.POST['vacancy']
            job.employment_status = request.POST['employment_status']
            job.office_time = request.POST['office_time']
            job.deadline = request.POST['deadline']
            job.company = company
            job.save()

            return redirect('jobs')

        else:
            return redirect('new-jobs')


def search(request):
    if request.GET['type'] == 'company' and request.GET['query'] is not '':
        company_name = request.GET['query']
        companies = Company.objects.filter(user__first_name__contains=company_name)
        companies_name = []
        for company in companies:
            companies_name.append(company.user.first_name)
        return JsonResponse({'companies': companies_name})
    else:
        return JsonResponse({'msg': 'no query found'})


def updateJobs(request, operation, jobslug):
    if operation == 'Edit':
        if request.method == "GET":
            job = Job.objects.get(slug=jobslug)
            form = JobForm(instance=job)
            com = Company.objects.all()
            return render(request, 'job/job-update.html', {'job': job, 'form': form, 'coms': com})
        elif request.method == "POST":
            job = Job.objects.get(slug=jobslug)
            form = JobForm(request.POST, instance=job)
            company = request.POST['company']
            if form.is_valid():
                job = form.save(commit=False)
                company = Company.objects.get(user__first_name=company)
                job.title = request.POST['title']
                job.description = request.POST['description']
                job.education_requirements = request.POST['education_requirements']
                job.experience_requirements = request.POST['experience_requirements']
                job.location = request.POST['location']
                job.salary_min = request.POST['salary_min']
                job.salary_max = request.POST['salary_max']
                job.vacancy = request.POST['vacancy']
                job.employment_status = request.POST['employment_status']
                job.office_time = request.POST['office_time']
                job.deadline = request.POST['deadline']
                job.company = company
                job.save()

                return redirect('jobs')
    elif operation == "Delete":
        job = Job.objects.get(slug=jobslug)
        job.delete()
        return redirect("jobs")


def job_details(request, slug):
    if request.method == 'GET':
        details = Job.objects.filter(slug=slug)
        app_no = Application.objects.filter(job__slug=slug).count()
        return render(request, 'job/job-details.html', {'details': details, 'app_no': app_no})


def job_cvs(request, slug):
    cvs = Application.objects.filter(job__slug=slug)
    return render(request, 'job/job-cv.html', {'cvs': cvs})
