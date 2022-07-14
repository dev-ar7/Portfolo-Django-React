from django.db import models


class Education(models.Model):

    name = models.CharField(max_length=175)
    school_or_college = models.CharField(max_length=255)
    certificate = models.BooleanField()
    description = models.TextField()
    finished_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name} - {self.school_or_college}'
