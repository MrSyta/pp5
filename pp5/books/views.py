from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action


from .models import Book
from .serializers import BookSerializer


class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer

    def get_queryset(self):
        req = self.request
        cart = req.session.get('cart')
        if not cart:
            from random import sample
            cart = ''.join(sample('abcdefghijklmnop', 5))
            req.session['cart'] = cart
            print('New cart:', cart)
        print(cart)
        published = req.query_params.get('published')
        title = req.query_params.get('title')
        if published:
            self.queryset = Book.objects.filter(published=published)
            return self.queryset
        elif title:
            self.queryset = Book.objects.filter(title__contains=title)
            return self.queryset
        else:
            self.queryset = Book.objects.all()
            return self.queryset
