from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings


from rest_framework.authtoken.views import obtain_auth_token 
from django.urls import path, include
urlpatterns = [
    path('admin/', admin.site.urls),
    path('Auth/', obtain_auth_token),
     path('api/', include('app.urls')),
     path('', include('frontend.urls'))
]

# if settings.DEBUG :
#     urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
#     urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT) 