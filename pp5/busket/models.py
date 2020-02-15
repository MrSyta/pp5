from django.db import models
from ..books.models import Book

class Busket(models.Model):
    book = models.ForeignKey(Book, on_delete = models.CASCADE)
