from django.db import models
from django.utils.text import slugify
from ckeditor.fields import RichTextField
import time
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

    def filename(self):
        return os.path.basename(self.cv.name)
