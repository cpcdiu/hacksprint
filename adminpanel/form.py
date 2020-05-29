from django.forms import ModelForm

from adminpanel.models import Practice


class PracticeForm(ModelForm):
    class Meta:
        model = Practice
        fields = ['body']
