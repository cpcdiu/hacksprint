from django.conf.urls import url
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User


def index(request):
    return render(request, 'adminpanel/index.html')


def users(request):
    all_user = User.objects.all().order_by('-id')
    return render(request, 'adminpanel/users.html', {'users': all_user})


def settings(request):
    return render(request, 'adminpanel/settings.html')


def user_action(request, action, uid):
    if action == 'approve':
        user = User.objects.filter(id=uid)
        user.update(is_active=True)

    if action == 'delete':
        user = User.objects.filter(id=uid)
        user.delete()
    return redirect('admin-users')
