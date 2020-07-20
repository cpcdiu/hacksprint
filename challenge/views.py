from django.contrib.auth.decorators import user_passes_test
from django.shortcuts import render


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def index(request):
    return render(request, 'challenge/challenges.html')
