from django.db import models

class Book(models.Model):
    title = models.TextField(max_length=100)
    genre = models.TextField(max_length=50)
    price = models.FloatField()
    author = models.TextField(max_length=50, default=None)
    description = models.TextField(max_length=500, default=None)
    cover = models.URLField(max_length=500, default=None)
    published = models.BooleanField(default=False)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title