from rest_framework import viewsets

from .models import Book
from .serializers import BookSerializer


class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer

    def get_queryset(self):
        queryset = Book.objects.all()

        # cart = req.session.get('cart')
        # if not cart:
        #     from random import sample
        #     cart = ''.join(sample('abcdefghijklmnop', 5))
        #     req.session['cart'] = cart
        #     print('New cart:', cart)
        # print(cart)
        published = self.request.query_params.get('published')
        title = self.request.query_params.get('title')
        if published:
            queryset = Book.objects.filter(published=published)
            return queryset
        elif title:
            queryset = Book.objects.filter(title__contains=title)
            return queryset
        elif published and title:
             queryset = Book.objects.filter(published=published, title__contains=title)
        else:
            queryset = Book.objects.all()
            return queryset
