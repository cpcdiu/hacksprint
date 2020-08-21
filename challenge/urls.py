from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('', views.index, name='challenges'),
    path('new/', views.new_challenge, name='challenge-new'),
    path('domains/', views.domains, name='domains'),
    path('domain/<str:action>/', views.domain_action, name='domain-action'),
    path('get-subdomain/', views.get_subdomain, name='get-subdomain'),
]

