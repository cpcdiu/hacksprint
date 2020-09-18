from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from account.models import *


@admin.register(User)
class UserModelAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('secondary_email',)}),
    )


admin.site.register(Profile)
admin.site.register(WorkExperience)
admin.site.register(Education)
admin.site.register(Company)
