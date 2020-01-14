from django.db import models

class Book(models.Model):
    name = models.TextField(max_length=100)
    genre = models.TextField(max_length=50)
    price = models.FloatField()
