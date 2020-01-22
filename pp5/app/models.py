from django.db import models

class Book(models.Model):
    title = models.TextField(max_length=100)
    genre = models.TextField(max_length=50)
    price = models.FloatField()
    author = models.TextField(max_length=50)
    description = models.TextField(max_length=100)
    cover = models.URLField(max_length=500)
    published = models.BooleanField(default=False)
