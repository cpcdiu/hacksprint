from django.contrib.auth.decorators import user_passes_test
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

from challenge.form import ChallengeForm
from challenge.models import Domain, Challenge, Subdomain


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def index(request):
    if request.method == 'GET':
        chal = Challenge.objects.all()
        return render(request, 'challenge/challenges.html', {'chal': chal})


@user_passes_test(lambda user: user.is_superuser or user.is_staff)
def new_challenge(request):
    if request.method == 'GET':
        domains = Domain.objects.all()
        subdomains = Subdomain.objects.all()
        form = ChallengeForm()
        context = {'form': form, "domains": domains, "subdomains": subdomains}
        return render(request, 'challenge/challenge-add.html', context)
    elif request.method == 'POST':
        title = request.POST['title']
        slug = request.POST['slug']
        description = request.POST['description']
        host = request.user
        domain_id = request.POST['domain']
        subdomain_id = request.POST['subdomain']
        start_date = request.POST['start_date']
        end_date = request.POST['end_date']
        thumbnail = request.FILES['thumbnail']
        form = ChallengeForm(request.POST)

        if form.is_valid():
            challenge = form.save(commit=False)
            domain = Domain.objects.get(id=domain_id)
            subdomain = Subdomain.objects.get(id=subdomain_id)
            challenge.title = title
            challenge.slug = slug
            challenge.description = description
            challenge.host = host
            challenge.domain = domain
            challenge.start_date = start_date
            challenge.end_date = end_date
            challenge.thumbnail = thumbnail
            challenge.save()
            challenge.subdomain.add(subdomain)

            return redirect('challenges')

        else:
            return redirect('challenge-new')


def get_subdomain(request):
    if request.method == 'GET':
        domainId = request.GET['selectedDomain']
        subdomain = Subdomain.objects.filter(domain=domainId)
        serialized_subdomain = serializers.serialize('json', subdomain, ensure_ascii=False)

        return JsonResponse(serialized_subdomain, safe=False)


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
