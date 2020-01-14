import json

from django.test import Client, TestCase
from django.urls import reverse

from .models import Book


class TestBookViews(TestCase):
    def setUp(self):
        self.client = Client()
        self.url = '/books/'

        self.book = Book.objects.create(
            id=1,
            name='Romeo i Julia',
            genre='Komedia',
            price=20
        )

    def test_book_GET(self):
        response = self.client.get(f'{self.url}{self.book.id}/')

        self.assertEquals(response.status_code, 200)

    def test_book_list_GET(self):
        response = self.client.get(self.url)

        self.assertEquals(response.status_code, 200)

    def test_book_POST(self):
        response = self.client.post(self.url, {
            'name': 'Makbet',
            'genre': 'Tragedia',
            'price': 10
        })
        self.assertEquals(response.status_code, 201)

    def test_book_PUT(self):
        response = self.client.put(f'{self.url}{self.book.id}/', {
            'name': 'Makbet',
            'genre': 'Komedia',
            'price': 20
        }, 'application/json')

        self.assertEquals(response.status_code, 200)

    def test_book_PATCH(self):
        response = self.client.patch(f'{self.url}{self.book.id}/', {
            'name': 'Makbet',
        }, 'application/json')

        self.assertEquals(response.status_code, 200)

    def test_book_DELETE(self):
        response = self.client.delete(f'{self.url}{self.book.id}/')

        self.assertEquals(response.status_code, 204)
