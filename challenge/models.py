from django.contrib.auth.models import User
from django.db import models


class Domain(models.Model):
    name = models.TextField()
    slug = models.SlugField(unique=True)


class Subdomain(models.Model):
    name = models.TextField()
    slug = models.SlugField(unique=True)
    domain = models.ForeignKey(Domain, on_delete=models.CASCADE)


class Challenge(models.Model):
    title = models.TextField()
    description = models.TextField()
    thumbnail = models.TextField()
    host = models.ForeignKey(User, on_delete=models.CASCADE)
    slug = models.SlugField(unique=True)
    guidelines = models.TextField(blank=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    domain = models.ForeignKey(Domain, on_delete=models.CASCADE)
    subdomain = models.ManyToManyField(Subdomain)


class ChallengesParticipation(models.Model):
    reg_time = models.DateTimeField()
    submission_time = models.DateTimeField()
    feedback = models.TextField(blank=True)
    challenge = models.OneToOneField(Challenge, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
