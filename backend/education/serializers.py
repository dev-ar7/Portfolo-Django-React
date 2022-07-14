from rest_framework import serializers
from .models import Education


class EducationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Education
        fields = ('id', 'name', 'school_or_college', 'certificate', 'description', 'finished_date')

