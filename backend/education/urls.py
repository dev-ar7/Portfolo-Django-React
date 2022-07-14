from django.urls import path
from .views import EducationCreate, EducationList
from rest_framework import routers


# router = routers.DefaultRouter()
# router.register(r'create/', EducationCreate.as_view(), basename='create')
# router.register(r'list/', EducationList.as_view(), basename='list')


urlpatterns = [
    path('create/', EducationCreate.as_view(), name='create'),
    path('list/', EducationList.as_view(), name='list')
]