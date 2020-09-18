from django.db import models
from account.models import User
from ckeditor.fields import RichTextField
from django.db.models.signals import pre_save

from utils.main import unique_slug_generator


class Track(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    desc = models.TextField()
    avatar = models.ImageField(
        max_length=100, upload_to='practice/tracks', default='default.jpg')

    def __str__(self):
        return self.title


class Subdomain(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True, blank=True)
    track = models.ForeignKey(Track, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Practice(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField()
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    track = models.ForeignKey(Track, on_delete=models.CASCADE)
    body = RichTextField()
    difficulty = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
    subdomain = models.ManyToManyField(Subdomain)

    def __str__(self):
        return self.title


def generate_slug_from_title(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance, for_=instance.title)


pre_save.connect(generate_slug_from_title, sender=Track)
pre_save.connect(generate_slug_from_title, sender=Subdomain)
pre_save.connect(generate_slug_from_title, sender=Practice)
