from rest_framework import status, filters
from rest_framework.generics import get_object_or_404
from rest_framework.generics import RetrieveAPIView, ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, \
    UpdateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from config.utils.pagination import PaginationWeb
