import datetime

from django.utils.translation import gettext as _
from django.template.response import TemplateResponse
from django.urls import reverse
from django.contrib.auth.views import *

from rest_framework import generics, status, filters
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import *


class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    authentication_classes = ()
    permission_classes = ()

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        token, created = Token.objects.get_or_create(user=serializer.get_user())
        created_at = serializer.get_user().created_at.date()
        today = datetime.date.today()
        registered_days = today - created_at
        return Response({
            'token': token.key,
            'first_name': serializer.get_user().first_name,
            'last_name': serializer.get_user().last_name,
            'email': serializer.get_user().email,
            'created_at': serializer.get_user().created_at.strftime("%Y-%m-%d"),
            'registered_days': registered_days.days,
            'user_id': serializer.get_user().id,
        }, status=status.HTTP_200_OK)


class CreateUserAPIView(generics.CreateAPIView):
    serializer_class = CreateUserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=status.HTTP_200_OK)


class RUDUserAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RetrieveUserSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user

class ListUsersByEnterpriseAPIView(generics.ListAPIView):

    serializer_class = RetrieveUserSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        enterprise = self.request.user.enterprise
        queryset = User.objects.filter(enterprise=enterprise)
        return queryset

