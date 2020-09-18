from django.db import models
from django.db.models.signals import pre_save
from django.utils.text import slugify
from ckeditor.fields import RichTextField
import time
from account.models import Profile, Company
from utils.main import unique_slug_generator


class Job(models.Model):
    EMPLOYMENT_STATUS = [
        ('part-time', 'Part Time'),
        ('full-time', 'Full Time'),
        ('internship', 'Internship'),
    ]

    title = models.CharField(max_length=500)
    # In description we have to add responsibility, compensation, guidelines
    description = RichTextField()
    education_requirements = models.TextField()
    experience_requirements = models.TextField()
    location = models.CharField(max_length=200)
    salary_min = models.IntegerField(blank=True)
    salary_max = models.IntegerField()
    vacancy = models.IntegerField()
    employment_status = models.CharField(max_length=20, choices=EMPLOYMENT_STATUS)
    office_time = models.CharField(max_length=100)
    deadline = models.DateTimeField()
    slug = models.SlugField(unique=True, blank=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if not self.id:
            job = Job.objects.filter(slug=slugify(self.title))
            if job.exists():
                self.slug = slugify(self.title) + str(int(time.time()))
            else:
                self.slug = slugify(self.title)
        super(Job, self).save(*args, **kwargs)

    def __str__(self):
        return self.title


class Application(models.Model):
    cv = models.FileField(upload_to='job/cvs')
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    job = models.ForeignKey(Job, on_delete=models.CASCADE)


def generate_slug_from_title(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance, for_=instance.title)


pre_save.connect(generate_slug_from_title, sender=Job)
