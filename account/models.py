from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    secondary_email = models.EmailField(unique=True, blank=True, null=True)

    def __str__(self):
        return self.username


class Profile(models.Model):
    bio = models.TextField(blank=True)
    address = models.CharField(max_length=100, blank=True)
    dob = models.DateField(null=True, blank=True)
    avatar = models.ImageField(upload_to='account/user', blank=True)
    phone = models.CharField(max_length=50, blank=True)
    website = models.URLField(max_length=100, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username


class Company(models.Model):
    COMPANY_SIZE = (
        ('xs', '1-10'),
        ('sm', '11-50'),
        ('md', '51-150'),
        ('lg', '151-300'),
        ('xl', '300+'),
    )

    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=30, blank=True)
    business_email = models.CharField(max_length=50, blank=True)
    website = models.URLField(max_length=100, blank=True)
    linkedin = models.CharField(max_length=50, blank=True)
    facebook = models.CharField(max_length=50, blank=True)
    company_size = models.CharField(
        max_length=50, blank=True, choices=COMPANY_SIZE)
    employees = models.ManyToManyField(User, blank=True, null=True)

    def __str__(self):
        return self.name


class WorkExperience(models.Model):
    position = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    started_at = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username


class Education(models.Model):
    program = models.CharField(max_length=100)
    institution = models.CharField(max_length=100)
    started_at = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username
