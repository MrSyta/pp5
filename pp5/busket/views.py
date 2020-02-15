from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

from .models import Busket
from .serializers import BusketSerializer

class BusketView(viewsets.ModelViewSet):
    queryset = Busket.objects.all()
    serializer_class = BusketSerializer