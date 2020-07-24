from django.forms import ModelForm

from challenge.models import Challenge


class ChallengeForm(ModelForm):
    class Meta:
        model = Challenge
        fields = ['body']