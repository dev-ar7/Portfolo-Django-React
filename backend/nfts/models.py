from django.db import models



class Nfts(models.Model):

    collection_name = models.CharField(max_length=245, blank=False, null=False)
    collection_link = models.URLField(blank=False, null=False)
    asset_name = models.CharField(max_length=245, blank=False, null=False)
    asset_img = models.URLField(blank=False, null=False)
    asset_link = models.URLField()
    teligram_channel = models.URLField(blank=True, null=True)
    price = models.FloatField(blank=False, null=False)

    def __str__(self):
        return f'{self.asset_name} - {self.price}ETH'
