from django.db import models


class Projects(models.Model):

    title = models.CharField(max_length=225)
    is_active = models.BooleanField()
    active_link = models.URLField(blank=True, null=True)
    github_link = models.URLField()
    language = models.CharField(max_length=175)
    description = models.TextField()

    def __str__(self):
        return f'{self.title} - {self.language}'

