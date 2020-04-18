from django.db import models
from django.contrib.auth.models import User


class Track(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()
    avatar = models.CharField(max_length=100)


class Practice(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True, default='User')
    track = models.ForeignKey(Track, on_delete=models.CASCADE)
    body = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
