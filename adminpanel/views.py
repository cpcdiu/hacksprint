from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'adminpanel/index.html')


def users(request):
    return render(request, 'adminpanel/users.html')


def settings(request):
    return render(request, 'adminpanel/settings.html')
