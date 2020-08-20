from ckeditor.fields import RichTextField
from django.contrib.auth.models import User
from django.db import models, transaction


class Domain(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    default_selected = models.BooleanField()

    @transaction.atomic
    def save(self, *args, **kwargs):
        if not self.default_selected:
            return super(Domain, self).save(*args, **kwargs)
        Domain.objects.filter(default_selected=True).update(default_selected=False)
        return super(Domain, self).save(*args, **kwargs)


class Subdomain(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    domain = models.ForeignKey(Domain, on_delete=models.CASCADE)


class Challenge(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    body = RichTextField()
    thumbnail = models.ImageField(upload_to='challenge')
    host = models.ForeignKey(User, on_delete=models.CASCADE)
    slug = models.SlugField(unique=True)
    guidelines = models.TextField(blank=True)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    domain = models.ForeignKey(Domain, on_delete=models.CASCADE)
    subdomain = models.ManyToManyField(Subdomain)


class ChallengesParticipation(models.Model):
    reg_time = models.DateTimeField()
    submission_time = models.DateTimeField()
    feedback = models.TextField(blank=True)
    challenge = models.OneToOneField(Challenge, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
