from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    location = models.CharField(max_length=300, null=True, blank=True)
    contact = models.CharField(max_length=200, null=True, blank=True)
    website = models.CharField(max_length=300, null=True, blank=True)
    email_verified = models.BooleanField(default=False)
    image = models.ImageField(upload_to='userpanel', default='userpanel/default-user.jpg')


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
