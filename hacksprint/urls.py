from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from main import views as main_views

urlpatterns = [
    path('', main_views.index, name='home'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
