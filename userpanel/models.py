from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    works_at = models.CharField(max_length=300)
    location = models.CharField(max_length=300)
    contact = models.CharField(max_length=200)
    website = models.CharField(max_length=300)


class WorkExperience(models.Model):
    position = models.TextField()
    company = models.TextField()
    started_at = models.DateField()
    end_date = models.DateField()
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)


class Education(models.Model):
    subject = models.TextField()
    institution = models.TextField()
    started_at = models.DateField()
    end_date = models.DateField()
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
