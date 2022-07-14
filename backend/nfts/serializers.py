from rest_framework import serializers
from .models import Nfts



class NftsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Nfts
        fields = ('id', 'collection_name', 'collection_link',
                  'asset_name', 'asset_img', 'asset_link', 'price')