from django.shortcuts import render


def index(request):
    return render(request, 'userpanel/index.html')


def profile(request):
    return render(request, 'userpanel/profile.html')


def challenges(request):
    return render(request, 'userpanel/challenges.html')


def practices(request):
    return render(request, 'userpanel/practice.html')


def jobs(request):
    return render(request, 'userpanel/jobs.html')
