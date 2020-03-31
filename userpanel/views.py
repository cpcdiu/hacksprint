from django.shortcuts import render


def index(request):
    return render(request, 'userpanel/index.html')

def profile(request):
    return render(request, 'userpanel/profile.html')