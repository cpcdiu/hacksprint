from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.auth.models import User
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import send_mail
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.views.generic import View
from cloudinary import uploader

from adminpanel.form import PracticeForm
from adminpanel.models import Track, Practice
from main.views import AccountActivationTokenGenerator


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def index(request):
    all_user = User.objects.all().count()
    active_user = User.objects.filter(is_active='1').count()
    inactive_user = User.objects.filter(is_active='0').count()
    context = {
        'all_user': all_user,
        'active_user': active_user,
        'inactive_user': inactive_user
    }
    return render(request, 'adminpanel/index.html', context)


class AdminStaffRequiredMixin(LoginRequiredMixin, UserPassesTestMixin):
  
    def test_func(self):
        return self.request.user.is_superuser or self.request.user.is_staff

# Users Functionality
class users(AdminStaffRequiredMixin, View):
  
    def get(self, request):
        all_user = User.objects.all().order_by('-date_joined')
        return render(request, 'adminpanel/users.html', {'users': all_user})

    def post(self, request):    
        if request.POST["action"] == "create-user":           
            user_data = self.createUser(request)
            return JsonResponse(user_data,safe=False)

        elif request.POST["action"] == "edit-user":
            user_data = self.editUser(request)
            return JsonResponse(user_data,safe=False)

        elif request.POST["action"] == "delete-user":
            user_data = self.deleteUser(request)
            return JsonResponse(user_data,safe=False)

        elif request.POST["action"] == "approve-user":
            user_data = self.approveUser(request)
            return JsonResponse(user_data,safe=False)

    def createUser(self, request):
        firstName = request.POST["firstName"]
        lastName = request.POST["lastName"]
        userName = request.POST["userName"]
        email = request.POST["email"]
        password = request.POST["password"]

        try:
            user = User.objects.create_user(first_name=firstName, last_name=lastName, username=userName, email=email, password=password)
            user_data={'id':user.id,'firstName':user.first_name,'lastName':user.last_name,'userName':user.username,'email':user.email,'last_login':user.last_login,"error":False,"errorMessage":"User Added Successfully!"}
            return user_data
        except:
            user_data={"error":True,"errorMessage":"Failed to Add User!"}
            return user_data

    def editUser(self, request):
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
            return user_data
        except:
            user_data={"error":True,"errorMessage":"Failed to Update User!"}
            return user_data

    def deleteUser(self, request):
        id = request.POST["id"]
        try:
            user=User.objects.get(id=id)
            user.delete()
            user_data={"error":False,"errorMessage":"User Deleted Successfully!"}
            return user_data
        except:
            user_data={"error":True,"errorMessage":"Failed to Delete User!"}
            return user_data

    def approveUser(self,request):
        id = request.POST["id"]
        try:
            user = User.objects.get(id=id)
            account_activation_token = AccountActivationTokenGenerator()
            context = {
                'user': user,
                'domain': get_current_site(request).domain,
                'token': urlsafe_base64_encode(force_bytes(user.id)) + '.' + account_activation_token.make_token(user)
            }

            subject = 'Please confirm your email'
            body = render_to_string('adminpanel/email-verification.html', context)
            sender = 'noreply@hacksprint.me'
            receiver = [user.email]

            send_mail(subject, 'this is body', sender, receiver, fail_silently=False, html_message=body)

            user_data={"error":False,"errorMessage":"User Approval Email Sent Successfully!"}
            return user_data
        except:
            user_data={"error":True,"errorMessage":"Failed to sent Approval Email to User!"}
            return user_data



@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def settings(request):
    return render(request, 'adminpanel/settings.html')


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

@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def profile(request):
    return render(request, 'adminpanel/profile.html')
