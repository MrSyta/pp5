from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action


from .models import Book
from .serializers import BookSerializer


class BookView(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


    def get_queryset(self):
        req = self.request
        published = req.query_params.get('published')
        if published:
            self.queryset = Book.objects.filter(published=published)
            return self.queryset
        else:
            return self.queryset
