from django.conf.urls import url
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required, user_passes_test
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from cloudinary import uploader

from adminpanel.models import Track, Practice


@user_passes_test(lambda u: u.is_superuser)
def index(request):
    return render(request, 'adminpanel/index.html')


# Users Page
@user_passes_test(lambda u: u.is_superuser)
def users(request):
    all_user = User.objects.all().order_by('-date_joined')
    return render(request, 'adminpanel/users.html', {'users': all_user})

# Create User
@csrf_exempt
def createUser(request):
    firstName = request.POST["firstName"]
    lastName = request.POST["lastName"]
    userName = request.POST["userName"]
    email = request.POST["email"]
    password = request.POST["password"]

    try:
        user = User.objects.create_user(first_name=firstName, last_name=lastName, username=userName, email=email, password=password)
        user_data={'id':user.id,'firstName':user.first_name,'lastName':user.last_name,'userName':user.username,'email':user.email,'last_login':user.last_login,"error":False,"errorMessage":"User Added Successfully!"}
        return JsonResponse(user_data,safe=False)
    except:
        user_data={"error":True,"errorMessage":"Failed to Add User!"}
        return JsonResponse(user_data,safe=False)

# Edit User
@csrf_exempt
def editUser(request):
    id = request.POST["id"]
    firstName = request.POST["firstName"]
    lastName = request.POST["lastName"]
    userName = request.POST["userName"]
    email = request.POST["email"]

    try:
        user=User.objects.get(id=id)
        user.first_name = firstName
        user.last_name = lastName
        user.username = userName
        user.email = email
        user.save()

        user_data={'id':user.id,'firstName':user.first_name,'lastName':user.last_name,'userName':user.username,'email':user.email,'last_login':user.last_login,"error":False,"errorMessage":"User Updated Successfully!"}
        return JsonResponse(user_data,safe=False)
    except:
        user_data={"error":True,"errorMessage":"Failed to Update User!"}
        return JsonResponse(user_data,safe=False)

# Delete User
@csrf_exempt
def deleteUser(request):
    id = request.POST["id"]
    try:
        user=User.objects.get(id=id)
        user.delete()
        user_data={"error":False,"errorMessage":"User Deleted Successfully!"}
        return JsonResponse(user_data,safe=False)
    except:
        user_data={"error":True,"errorMessage":"Failed to Delete User!"}
        return JsonResponse(user_data,safe=False)


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
        return render(request, 'adminpanel/practices.html', {'practices': practices})
    if request.method == 'POST':
        title = request.POST['title']
        body = request.POST['body']
        author = request.user
        track = Track.objects.get(id=id)

        practice = Practice(title=title, author=author, track=track, body=body)
        practice.save()

        return redirect('/admin/tracks/' + str(id))


@user_passes_test(lambda u: u.is_superuser)
def challenges(request):
    return render(request, 'adminpanel/challenges.html')