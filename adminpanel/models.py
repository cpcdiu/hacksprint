from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
from utils.main import generate_uuid4


class Track(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=250)
    desc = models.TextField()
    avatar = models.CharField(max_length=100)


class SubDomain(models.Model):
    title = models.CharField(max_length=50)
    track = models.ForeignKey(Track, on_delete=models.CASCADE)


class Practice(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=250, default=generate_uuid4())
    description = models.TextField(max_length=50, default='Description is coming')
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    track = models.ForeignKey(Track, on_delete=models.CASCADE)
    body = RichTextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    difficulty = models.CharField(max_length=100)
    subdomain = models.ManyToManyField(SubDomain)
