from django.conf.urls import url
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required, user_passes_test
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from cloudinary import uploader

from userpanel.models import Track


@user_passes_test(lambda u: u.is_superuser)
def index(request):
    return render(request, 'adminpanel/index.html')


@user_passes_test(lambda u: u.is_superuser)
def users(request):
    all_user = User.objects.all().order_by('-date_joined')
    return render(request, 'adminpanel/users.html', {'users': all_user})


@user_passes_test(lambda u: u.is_superuser)
def settings(request):
    return render(request, 'adminpanel/settings.html')


@user_passes_test(lambda u: u.is_superuser)
def user_action(request, action, uid):
    if action == 'approve':
        user = User.objects.filter(id=uid)
        user.update(is_active=True)

    if action == 'delete':
        user = User.objects.filter(id=uid)
        user.delete()
    return redirect('admin-users')


def admin_login(request):
    if request.method == 'GET':
        return render(request, 'adminpanel/login.html')

    elif request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)

        if user is not None and user.is_superuser:
            login(request, user)
            if request.GET:
                return redirect(request.GET['next'])
            return redirect('adminpanel')

        else:
            messages.error(request, 'No such account')
            return render(request, 'adminpanel/login.html')


def tracks(request):
    if request.method == 'GET':
        all_tracks = Track.objects.all()
        return render(request, 'adminpanel/tracks.html', {'tracks': all_tracks})

    elif request.method == 'POST':
        title = request.POST['title']
        desc = request.POST['desc']
        avatar = request.FILES['avatar']
        info = uploader.upload(avatar)

        track = Track(title=title, desc=desc, avatar=info['url'])
        track.save()

        return redirect('tracks')