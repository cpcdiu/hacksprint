from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path
from misc import views as misc_views

urlpatterns = [
    path('api/account/', include('account.urls')),
    path('api/challenges/', include('challenge.urls')),
    path('api/tracks/', include('practice.urls')),
    path('api/jobs/', include('job.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += [path('dev-admin/', admin.site.urls)]
else:
    urlpatterns += [re_path('.*', misc_views.index, name='index')]
