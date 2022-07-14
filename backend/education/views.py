from rest_framework import generics, status
from rest_framework.response import Response
from .models import Education
from .serializers import EducationSerializer


class EducationCreate(generics.CreateAPIView):

    queryset = Education.objects.all()
    serializer_class = EducationSerializer

    def post(self, request):

        if request.method == 'POST':
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


class EducationList(generics.ListAPIView):

    queryset = Education.objects.all().order_by('-finished_date')
    serializer_class = EducationSerializer

