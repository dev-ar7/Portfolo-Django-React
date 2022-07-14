from rest_framework import serializers
from .models import Projects


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Projects
        fields = ('id', 'title', 'is_active', 'active_link', 'github_link', 'language', 'description')