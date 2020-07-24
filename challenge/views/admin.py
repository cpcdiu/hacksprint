from django.contrib.auth.decorators import user_passes_test
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

from challenge.form import ChallengeForm
from challenge.models import Domain


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def index(request):
    return render(request, 'challenge/challenges.html')


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def new_challenge(request):
    if request.method == 'GET':
        form = ChallengeForm()
        return render(request, 'challenge/challenge-add.html', {'form': form})
    elif request.method == 'POST':
        title = request.POST['title']
        slug = request.POST['slug']
        description = request.POST['description']
        host = request.POST['host']
        domain = request.POST['domain']
        subdomain = request.POST['subdomain']
        start_date = request.POST['start_date']
        end_date = request.POST['end_date']
        # thumbnail = request.FILES['thumbnail']
        form = ChallengeForm(request.POST)

        if form.is_valid():
            challenge = form.save(commit=False)
            challenge.title = title
            challenge.slug = slug
            challenge.description = description
            challenge.host = request.user
            challenge.start_date = start_date
            challenge.end_date = end_date
            # challenge.domain = domain
            # challenge.subdomain = subdomain
            challenge.save()
            return redirect('challenges')

        # else:
        #     return redirect('challenge-new')


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def domains(request):
    if request.method == 'GET':
        domains = Domain.objects.all()
        return render(request, 'challenge/domains.html', {'domains': domains})

    elif request.method == 'POST':
        name = request.POST['name']
        slug = request.POST['slug']
        description = request.POST['description']

        Domain.objects.create(name=name, slug=slug, description=description)

        return redirect('domains')


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def domain_action(request, action):
    if request.method == 'POST':
        if action == 'update':
            name = request.POST['name']
            slug = request.POST['slug']
            description = request.POST['description']
            domain_id = request.POST['id']

            domain = Domain.objects.get(id=domain_id)
            domain.name = name
            domain.slug = slug
            domain.description = description
            domain.save()

            domain = Domain.objects.get(slug=slug)
            serialized_domain = serializers.serialize('json', [domain], ensure_ascii=False)
            data = serialized_domain[1:-1]

            return JsonResponse(data, safe=False)
