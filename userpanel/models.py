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


class Company(models.Model):
    address = models.CharField(max_length=100, null=True, blank=True)
    country = models.CharField(max_length=50, null=True, blank=True)
    phone_number = models.CharField(max_length=30, null=True, blank=True)
    business_email = models.CharField(max_length=50, null=True, blank=True)
    website = models.CharField(max_length=50, null=True, blank=True)
    linkedin = models.CharField(max_length=100, null=True, blank=True)
    facebook = models.CharField(max_length=100, null=True, blank=True)
    company_size = models.CharField(max_length=50, null=True, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
