from rest_framework import generics, status
from rest_framework.response import Response
from .models import Nfts
from .serializers import NftsSerializer



class NftCreate(generics.CreateAPIView):

    queryset = Nfts.objects.all()
    serializer_class = NftsSerializer
    

    def post(self, request):

        if request.method == 'POST':
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


class NftsList(generics.ListAPIView):

    queryset = Nfts.objects.all()
    serializer_class = NftsSerializer


class NftDetails(generics.RetrieveAPIView):

    queryset = Nfts.objects.all()
    serializer_class = NftsSerializer


class NftUpdate(generics.RetrieveUpdateAPIView):

    queryset = Nfts.objects.all()
    serializer_class = NftsSerializer


class NftDelete(generics.RetrieveDestroyAPIView):

    queryset = Nfts.objects.all()
    serializer_class = NftsSerializer