from django.db import models


class Track(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()
    avatar = models.CharField(max_length=100)
