from django.shortcuts import render


def index(request):
    return render(request, 'main/index.html')


def login_fn(request):
    return render(request, 'main/login.html')


def register_fn(request):
    return render(request, 'main/register.html')
