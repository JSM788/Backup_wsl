from rest_framework import status, filters
from rest_framework.generics import get_object_or_404
from rest_framework.generics import RetrieveAPIView, ListAPIView
from django_filters.rest_framework import DjangoFilterBackend as filterset_backend

from .filters import RoomFilter
from .serializers import EnterpriseSerializer, HeadquarterSerializer, HeadquarterBasicSerializer, RoomSerializer
from rest_framework.permissions import IsAuthenticated

from apps.enterprise.models import Enterprise, Headquarters

from ...sensors.models import Local


class EnterpriseListAPIView(ListAPIView):
    queryset = Enterprise.objects.all()
    serializer_class = EnterpriseSerializer


class EnterpriseRetrieveAPIView(RetrieveAPIView):
    serializer_class = EnterpriseSerializer

    def get_object(self):
        enterprise_id = self.request.user.enterprise_id
        obj = get_object_or_404(Enterprise, id=enterprise_id)
        return obj


class HeadquarterListAPIView(ListAPIView):
    permission_classes = IsAuthenticated,
    serializer_class = HeadquarterBasicSerializer

    def get_queryset(self):
        enterprise = self.request.user.enterprise
        queryset = Headquarters.objects.filter(enterprise_id=enterprise.id).order_by('name')
        return queryset


class RoomListAPIView(ListAPIView):
    permission_classes = IsAuthenticated,
    serializer_class = RoomSerializer
    flterset_class = RoomFilter
    filter_backends = (filters.SearchFilter, filterset_backend)
    search_fields = ('name__unaccent',)

    def get_queryset(self):
        enterprise = self.request.user.enterprise
        queryset = Local.objects.filter(headquarter__enterprise_id=enterprise.id, is_activated=True).order_by('name')
        return queryset


class HeadquarterSelectorListAPIView(ListAPIView):
    serializer_class = HeadquarterBasicSerializer

    def get_queryset(self):
        queryset = Headquarters.objects.filter(enterprise=self.kwargs['id'])
        return queryset


class HeadquarterRetrieveAPIView(RetrieveAPIView):
    serializer_class = HeadquarterSerializer

    def get_object(self):
        obj = get_object_or_404(Headquarters, id=self.kwargs['id'])
        return obj
