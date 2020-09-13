from django.forms import ModelForm

from job.models import Job


class JobForm(ModelForm):
    class Meta:
        model = Job
        fields = ['description']
