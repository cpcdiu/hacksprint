from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from main import views as main_views
from adminpanel import views as admin_views

urlpatterns = [
    path('', main_views.index, name='home'),
    path('login/', main_views.login_fn, name='login'),
    path('register/', main_views.register_fn, name='register'),
    path('admin/', admin_views.index, name='admin')
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
