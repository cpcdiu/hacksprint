from django.conf.urls import url
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required, user_passes_test
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from cloudinary import uploader

from adminpanel.form import PracticeForm
from adminpanel.models import Track, Practice


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


def single_track(request, id):
    if request.method == 'GET':
        practices = Practice.objects.filter(track__id=id)
        context = {'practices': practices, 'trackID': id}
        return render(request, 'adminpanel/practices.html', context)

    if request.method == 'POST':
        title = request.POST['title']
        body = request.POST['body']
        author = request.user
        track = Track.objects.get(id=id)

        practice = Practice(title=title, author=author, track=track, body=body)
        practice.save()

        return redirect('/admin/tracks/' + str(id))


@user_passes_test(lambda u: u.is_superuser)
def practice_add(request, trackID):
    if request.method == 'GET':
        form = PracticeForm()
        return render(request, 'adminpanel/practice-add.html', {'form': form})

    if request.method == 'POST':
        form = PracticeForm(request.POST)
        title = request.POST['title']
        track = Track.objects.get(id=trackID)
        if form.is_valid():
            practice = form.save(commit=False)
            practice.author = request.user
            practice.track = track
            practice.title = title
            practice.save()
            return redirect('/admin/')


@user_passes_test(lambda u: u.is_superuser)
def challenges(request):
    return render(request, 'adminpanel/challenges.html')
