# -*- coding: utf-8 -*-
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer

# Create your views here.
class UserList(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
