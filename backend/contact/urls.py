from django.urls import path, include
from .views import ContactCreate


urlpatterns = [
    path('', ContactCreate.as_view(), name='contact'),
]