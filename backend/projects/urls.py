from django.urls import path, include
from .views import ProjectCreate, ProjectList



urlpatterns = [
    path('create/', ProjectCreate.as_view(), name='create'),
    path('list/', ProjectList.as_view(), name='list'),
]