from django.contrib.auth.decorators import user_passes_test
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from job.models import Job
from userpanel.models import User, Company
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
        title = request.POST['title']
        description = request.POST['description']
        education_requirements = request.POST['education_requirements']
        experience_requirements = request.POST['experience_requirements']
        location = request.POST['location']
        salary_min = request.POST['salary_min']
        salary_max = request.POST['salary_max']
        vacancy = request.POST['vacancy']
        employment_status = request.POST['employment_status']
        office_time = request.POST['office_time']
        deadline = request.POST['deadline']
        company = request.POST['company']
        form = JobForm(request.POST)
        if form.is_valid():
            job = form.save(commit=False)
            company = Company.objects.get(user__first_name=company)
            job.title = title
            job.description = description
            job.education_requirements = education_requirements
            job.experience_requirements = experience_requirements
            job.location = location
            job.salary_min = salary_min
            job.salary_max = salary_max
            job.vacancy = vacancy
            job.employment_status = employment_status
            job.office_time = office_time
            job.deadline = deadline
            job.company = company
            job.save()

            return redirect('jobs')

        else:
            return redirect('new-jobs')


def companySearch(request):
    company = request.GET.get('term')
    query_set = Company.objects.filter(user__first_name__contains=company)
    companies = []
    for term in query_set:
        companies.append(term.query_set)
        return JsonResponse(companies, safe=False)
    return render(request, 'job/job-add.html')


def updateJobs(request, operation, jobslug):
    if operation == 'Edit':
        if request.method == "GET":
            job = Job.objects.get(slug=jobslug)
            form = JobForm(instance=job)
            return render(request, 'job/job-update.html', {'job': job, 'form': form})
        elif request.method == "POST":
            job = Job.objects.get(slug=jobslug)
            form = JobForm(request.POST, instance=job)
            title = request.POST['title']
            description = request.POST['description']
            education_requirements = request.POST['education_requirements']
            experience_requirements = request.POST['experience_requirements']
            location = request.POST['location']
            salary_min = request.POST['salary_min']
            salary_max = request.POST['salary_max']
            vacancy = request.POST['vacancy']
            employment_status = request.POST['employment_status']
            office_time = request.POST['office_time']
            deadline = request.POST['deadline']
            company = request.POST['company']
            if form.is_valid():
                job = form.save(commit=False)
                company = Company.objects.get(user__first_name=company)
                job.title = title
                job.description = description
                job.education_requirements = education_requirements
                job.experience_requirements = experience_requirements
                job.location = location
                job.salary_min = salary_min
                job.salary_max = salary_max
                job.vacancy = vacancy
                job.employment_status = employment_status
                job.office_time = office_time
                job.deadline = deadline
                job.company = company
                job.save()

                return redirect('jobs')
#
    elif operation == "Delete":
        job = Job.objects.get(slug=jobslug)
        job.delete()
        return redirect("jobs")
