from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/education/', include('education.urls')),
    path('api/projects/', include('projects.urls')),
    path('api/nft-collections/', include('nfts.urls')),
    path('api/contact-me/', include('contact.urls')),
]
