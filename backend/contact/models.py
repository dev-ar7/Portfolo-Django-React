from django.db import models


class Contact(models.Model):

    full_name = models.CharField(max_length=254)
    email = models.EmailField()
    website = models.URLField(blank=True, null=True)
    subject = models.CharField(max_length=255)
    message = models.TextField()

    def __str__(self):
        return self.subject
