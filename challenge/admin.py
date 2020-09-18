from django.contrib import admin
from challenge.models import *

admin.site.register(Domain)
admin.site.register(Subdomain)
admin.site.register(Challenge)
admin.site.register(ChallengesParticipation)