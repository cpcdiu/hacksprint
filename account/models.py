from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=100, blank=True)
    phone_no = models.CharField(max_length=50, blank=True)
    website = models.URLField(max_length=100, blank=True)
    email_verified = models.BooleanField(default=False)
    image = models.ImageField(upload_to='account/user', default='default.jpg')

    def __str__(self):
        return self.user.username


class WorkExperience(models.Model):
    position = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    started_at = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)


class Education(models.Model):
    program = models.CharField(max_length=100)
    institution = models.CharField(max_length=100)
    started_at = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)


class Company(models.Model):
    COMPANY_SIZE = (
        ('xs', '1-10'),
        ('sm', '11-50'),
        ('md', '51-150'),
        ('lg', '151-300'),
        ('xl', '300+'),
    )

    address = models.CharField(max_length=100, blank=True)
    country = models.CharField(max_length=50, blank=True)
    phone_no = models.CharField(max_length=30, blank=True)
    business_email = models.CharField(max_length=50, blank=True)
    website = models.URLField(max_length=100, blank=True)
    linkedin = models.CharField(max_length=50, blank=True)
    facebook = models.CharField(max_length=50, blank=True)
    company_size = models.CharField(
        max_length=50, blank=True, choices=COMPANY_SIZE)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username
