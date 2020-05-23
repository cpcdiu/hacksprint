from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.views import APIView

from main.serializers import UserSerializer


class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name
        })


class SignUpView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"msg": "user created successfully"})
        return Response({"msg": "something wrong"})


def index(request):
    return render(request, 'index.html')


def home(request):
    if request.user.is_authenticated:
        return render(request, 'userpanel/index.html')
    else:
        return render(request, 'main/index.html')


def login_fn(request):
    if request.user.is_authenticated:
        return redirect('/')
    else:
        if request.method == 'GET':
            return render(request, 'main/login.html')

        elif request.method == 'POST':
            username = request.POST['username']
            password = request.POST['password']

            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                messages.error(request, 'Invalid Username and Password')
                return render(request, 'main/login.html')


def logout_fn(request):
    logout(request)
    return redirect('home')


def register_fn(request):
    if request.user.is_authenticated:
        return redirect('/')
    else:
        if request.method == 'GET':
            return render(request, 'main/register.html')

        elif request.method == 'POST':
            first_name = request.POST['first_name']
            last_name = request.POST['last_name']
            username = request.POST['username']
            email = request.POST['email'] + '@diu.edu.bd'
            password = request.POST['password']

            if first_name == '' or last_name == '' or username == '' or email == '' or password == '':
                messages.error(request, 'Fields sould not be blank')
                return render(request, 'main/register.html')

            username_count = User.objects.filter(username=username).count()
            email_count = User.objects.filter(email=email).count()

            if username_count == 0 and email_count == 0:
                User.objects.create_user(first_name=first_name, last_name=last_name, username=username, email=email,
                                         password=password, is_active=False)
                return redirect('login')

            if username_count > 0:
                messages.error(request, 'Username is in used')

            if email_count > 0:
                messages.error(request, 'Email is in used')

            return render(request, 'main/register.html')
