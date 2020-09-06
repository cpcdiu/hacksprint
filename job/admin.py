from django.contrib import admin



from job.models import Job, Application

admin.site.register(Job)
admin.site.register(Application)