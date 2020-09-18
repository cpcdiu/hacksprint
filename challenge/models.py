from ckeditor.fields import RichTextField
from django.core.exceptions import ValidationError
from django.db import models, transaction
from django.db.models.signals import pre_save, m2m_changed

from account.models import User
from utils.main import unique_slug_generator


class Domain(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField(blank=True)
    default_selected = models.BooleanField()

    def __str__(self):
        return self.title

    @transaction.atomic
    def save(self, *args, **kwargs):
        if not self.default_selected:
            return super(Domain, self).save(*args, **kwargs)
        Domain.objects.filter(default_selected=True).update(
            default_selected=False)
        return super(Domain, self).save(*args, **kwargs)


class Subdomain(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    domain = models.ForeignKey(Domain, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Challenge(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    body = RichTextField()
    thumbnail = models.ImageField(upload_to='challenge/challenges')
    host = models.ForeignKey(User, on_delete=models.CASCADE)
    slug = models.SlugField(unique=True, blank=True)
    guidelines = models.TextField(blank=True)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    domain = models.ForeignKey(Domain, on_delete=models.CASCADE)
    subdomain = models.ManyToManyField(Subdomain)

    def __str__(self):
        return self.title


class ChallengesParticipation(models.Model):
    name = models.CharField(max_length=200)
    reg_time = models.DateTimeField(auto_now_add=True)
    submission_time = models.DateTimeField(blank=True, null=True)
    feedback = models.TextField(blank=True)
    submission_link = models.CharField(max_length=300, null=True, blank=True)
    challenge = models.ForeignKey(Challenge, on_delete=models.CASCADE)
    member = models.ManyToManyField(User, related_name="member")
    leader = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


def check_max_member(sender, **kwargs):
    if kwargs['instance'].member.count() > 3:
        raise ValidationError("You can't add more than three members")


def generate_slug_from_title(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance, for_=instance.title)


pre_save.connect(generate_slug_from_title, sender=Challenge)
pre_save.connect(generate_slug_from_title, sender=Domain)
pre_save.connect(generate_slug_from_title, sender=Subdomain)
m2m_changed.connect(check_max_member, sender=ChallengesParticipation.member.through)
