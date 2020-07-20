from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
from django.db.models.signals import pre_save
from django.utils.text import slugify
from utils.main import generate_uuid4


class Track(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=250)
    desc = models.TextField()
    avatar = models.CharField(max_length=100)


    # def save(self, *args, **kwargs):
    #     self.slug = slugify(self.title)
    #     super(Track, self).save(*args, **kwargs)



def track_slug_generator(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = slugify(instance.title)


pre_save.connect(track_slug_generator, sender=Track)


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


    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Practice, self).save(*args, **kwargs)


def practice_slug_generator(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = slugify(instance.title)


pre_save.connect(practice_slug_generator, sender=Practice)



