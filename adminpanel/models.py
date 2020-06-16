from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField


class Track(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()
    avatar = models.CharField(max_length=100)


class SubDomain(models.Model):
    title = models.CharField(max_length=50)
    track = models.ForeignKey(Track, on_delete=models.CASCADE)


class Practice(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    track = models.ForeignKey(Track, on_delete=models.CASCADE)
    body = RichTextField()
    timestamp = models.DateTimeField(auto_now_add=True)
