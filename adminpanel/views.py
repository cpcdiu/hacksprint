from django.conf.urls import url
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib import auth
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from cloudinary import uploader

from adminpanel.form import PracticeForm
from adminpanel.models import Track, Practice


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def index(request):
    return render(request, 'adminpanel/index.html')


@user_passes_test(lambda u: u.is_superuser)
def users(request):
    all_user = User.objects.all().order_by('-date_joined')
    return render(request, 'adminpanel/users.html', {'users': all_user})


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def settings(request):
    return render(request, 'adminpanel/settings.html')


@user_passes_test(lambda u: u.is_superuser)
def user_action(request, action, userid):
    if action == 'approve':
        user = User.objects.filter(id=userid)
        user.update(is_active=True)

    if action == 'delete':
        user = User.objects.filter(id=userid)
        user.delete()
    return redirect('admin-users')


def admin_login(request):
    if request.method == 'GET':
        return render(request, 'adminpanel/login.html')

    elif request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)

        if user is not None and user.is_superuser or user.is_staff:
            login(request, user)
            if request.GET:
                return redirect(request.GET['next'])
            return redirect('adminpanel')

        else:
            messages.error(request, 'No such account')
            return render(request, 'adminpanel/login.html')


def admin_logOut(request):
    logout(request)
    return redirect('/')


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def tracks(request):
    if request.method == 'GET':
        all_tracks = Track.objects.all()
        return render(request, 'adminpanel/tracks.html', {'tracks': all_tracks})

    elif request.method == 'POST':
        title = request.POST['title']
        desc = request.POST['desc']
        if len(request.FILES) is 0:
            avatar = 'https://res.cloudinary.com/shakilahmmeed/image/upload/v1590647375/aboq57tmbmyx0jb4fzml.jpg'
            track = Track(title=title, desc=desc, avatar=avatar)
        else:
            avatar = request.FILES['avatar']
            info = uploader.upload(avatar)
            track = Track(title=title, desc=desc, avatar=info['url'])
        track.save()

        return redirect('tracks')


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def track_action(request, action, trackid):
    if action == 'delete':
        print(trackid)
        track = Track.objects.get(id=trackid)
        track.delete()
        return redirect('tracks')
    elif action == 'edit':
        title = request.POST['title']
        desc = request.POST['desc']
        if len(request.FILES) is 0:
            track = Track.objects.filter(id=trackid)
            track.update(title=title, desc=desc)
        else:
            avatar = request.FILES['avatar']
            info = uploader.upload(avatar)
            track = Track.objects.filter(id=trackid)
            track.update(title=title, desc=desc, avatar=info['url'])
        return redirect('tracks')

    else:
        return redirect('tracks')


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
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


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def single_practice(request, practiceid):
    practice = Practice.objects.get(id=practiceid)
    return render(request, 'adminpanel/practice-single.html', {'practice': practice})


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def practice_add(request, trackid):
    if request.method == 'GET':
        form = PracticeForm()
        return render(request, 'adminpanel/practice-add.html', {'form': form})

    if request.method == 'POST':
        form = PracticeForm(request.POST)
        title = request.POST['title']
        track = Track.objects.get(id=trackid)
        if form.is_valid():
            practice = form.save(commit=False)
            practice.author = request.user
            practice.track = track
            practice.title = title
            practice.save()
            return redirect('/admin/')


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def practice_action(request, action, practiceid):
    if action == 'delete':
        practice = Practice.objects.get(id=practiceid)
        practice.delete()
        return redirect('single-track', id=1)

    if action == 'edit':
        if request.method == 'GET':
            practice = Practice.objects.get(id=practiceid)
            form = PracticeForm(instance=practice)

            context = {
                'form': form,
                'practice': practice
            }
            return render(request, 'adminpanel/practice-edit.html', context)

        elif request.method == 'POST':
            practice = Practice.objects.get(id=practiceid)
            form = PracticeForm(request.POST, instance=practice)
            title = request.POST['title']

            if form.is_valid():
                practice = form.save(commit=False)
                practice.title = title
                practice.save()
                return redirect('tracks')


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def challenges(request):
    return render(request, 'adminpanel/challenges.html')
