from ckeditor.fields import RichTextField
from django.db import models
from userpanel.models import Profile, Company


class Job(models.Model):
    title = models.CharField(max_length=500)
    description = RichTextField()  # In description we have to add responsibility, compensation, guidelines
    education_requirements = models.TextField()
    experience_requirements = models.TextField()
    location = models.CharField(max_length=200)
    salary_min = models.IntegerField(null=True)
    salary_max = models.IntegerField()
    vacancy = models.IntegerField()
    employment_status = models.CharField(max_length=100)
    office_time = models.CharField(max_length=100)
    deadline = models.DateTimeField()
    slug = models.SlugField(unique=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)


class Application(models.Model):
    cv = models.FileField()
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
