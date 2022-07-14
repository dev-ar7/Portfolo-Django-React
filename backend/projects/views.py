from rest_framework import generics, status
from rest_framework.response import Response
from .models import Projects
from .serializers import ProjectSerializer


class ProjectCreate(generics.CreateAPIView):

    queryset = Projects.objects.all()
    serializer_class = ProjectSerializer

    def post(self, request):

        if request.method == 'POST':
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


class ProjectList(generics.ListAPIView):

    queryset = Projects.objects.all()
    serializer_class = ProjectSerializer
