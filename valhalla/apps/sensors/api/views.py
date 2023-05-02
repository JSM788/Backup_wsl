import pandas as pd
from django.http import HttpResponse
from django.utils.datetime_safe import datetime
from django_filters.rest_framework import DjangoFilterBackend as filterset_backend
from rest_framework import status, filters
from rest_framework.generics import GenericAPIView, ListAPIView, RetrieveAPIView
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from apps.sensors.tasks.tasks_gateway import task_gateway, task_gateway_socket
from config.utils.pagination import PaginationWeb
from config.settings.base import TIME_ZONE
from .filters import SensorCO2Filter, LocalFilter
from .serializers import *
from ..models import Local, AverageRoomIndicators
import csv


class GatewayCO2TestAPIView(GenericAPIView):
    serializer_class = SensorsSerializer
    authentication_classes = ()
    permission_classes = ()

    def post(self, request, *args, **kwargs):
        data = request.data
        print(data)
        task_gateway.delay(data)
        return Response({'status': 'ok'}, status=status.HTTP_201_CREATED)


class GatewaySocketAPIView(GenericAPIView):
    authentication_classes = ()
    permission_classes = ()

    def post(self, request, *args, **kwargs):
        data = request.data
        task_gateway_socket.delay(data)
        return Response({'status': 'ok'}, status=status.HTTP_201_CREATED)


class ReFixGatewayCO2TestAPIView(GenericAPIView):
    serializer_class = SensorsSerializer

    def post(self, request, *args, **kwargs):
        for i in SensorCO2.objects.all():
            i.save()
        return Response({'status': 'ok'}, status=status.HTTP_201_CREATED)


class SaloonEnterpriseAPIView(ListAPIView):
    serializer_class = SalasSerializer
    permission_classes = IsAuthenticated,
    pagination_class = PaginationWeb
    filterset_class = LocalFilter
    filter_backends = (filters.SearchFilter, filterset_backend)
    search_fields = ('name__unaccent',)

    def get_queryset(self):
        queryset = Local.objects.filter(
            headquarter__enterprise_id=self.kwargs['enterprise'], is_activated=True).order_by('-created_at')
        return queryset


class DeviceRetrieveAPIView(RetrieveAPIView):
    serializer_class = SensorsSerializer
    permission_classes = IsAuthenticated,
    pagination_class = PaginationWeb

    def get_object(self):
        obj = get_object_or_404(Device, id=self.kwargs['device'])
        return obj


class RoomRetrieveAPIView(RetrieveAPIView):
    serializer_class = LocalSerializer
    permission_classes = IsAuthenticated,
    pagination_class = PaginationWeb

    def get_object(self):
        obj = get_object_or_404(Local, id=self.kwargs['room'])
        return obj


class LastDataAPIView(RetrieveAPIView):
    serializer_class = SensorDatosSerializer

    def get_object(self):
        room_id = self.kwargs['room']
        return SensorCO2.objects.filter(room_id=room_id).last()


class PromedioApiView(GenericAPIView):
    serializer_class = AvergareSerializer
    permission_classes = IsAuthenticated,

    def get_queryset(self):
        indicator = self.request.query_params.get('indicator', default=None)
        room = self.request.query_params.get('room', default=None)
        today = datetime.today().date()
        queryset = AverageRoomIndicators.objects.none()
        if indicator and room:
            queryset = AverageRoomIndicators.objects.filter(room_id=room, created_at__date=today).values(
                f'{indicator}',
                f'status_{indicator}',
                'modified_at',
                'room')
        return queryset

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if len(queryset) > 0:
            queryset = queryset.first()
            queryset = self.get_serializer(queryset, many=False)
            return Response(queryset.data)
        return Response(queryset)

    def get_serializer_context(self):
        indicator = self.request.query_params.get('indicator', default=None)
        context = super(PromedioApiView, self).get_serializer_context()
        if indicator:
            context.update({'indicator': indicator})
        return context


class LastTenDataAPIView(ListAPIView):
    serializer_class = IndicatorSerializer

    def get_queryset(self):
        indicator = self.request.query_params.get('indicator')
        print(self.kwargs['room'])
        filters_query = {f'{indicator}__isnull': False, 'room_id': self.kwargs['room']}
        queryset = SensorCO2.objects.filter(**filters_query).values(f'{indicator}', f'status_{indicator}',
                                                                    'created_at').order_by('-created_at')[:10]
        return queryset[::-1]

    def get_serializer_context(self):
        indicator = self.request.query_params.get('indicator', default=None)
        context = super(LastTenDataAPIView, self).get_serializer_context()
        if indicator:
            context.update({'indicator': indicator})
        return context


class IndicatorsLisAPIView(ListAPIView):
    serializer_class = IndicatorSerializer
    permission_classes = IsAuthenticated,
    pagination_class = PaginationWeb
    filterset_class = SensorCO2Filter

    def get_queryset(self):
        indicator = self.request.query_params.get('indicator', default=None)
        status = self.request.query_params.get('status', default=None)
        queryset = SensorCO2.objects.none()

        if indicator:
            filters = {f'{indicator}__isnull': False}
            if status:
                filters[f'status_{indicator}'] = status
            queryset = SensorCO2.objects.filter(**filters)

            queryset = queryset.values(f'{indicator}', f'status_{indicator}',
                                       'created_at').order_by('-created_at')

        return queryset

    def get_serializer_context(self):
        indicator = self.request.query_params.get('indicator', default=None)
        context = super(IndicatorsLisAPIView, self).get_serializer_context()
        if indicator:
            context.update({'indicator': indicator})
        return context


class IndicatorsReportAPIView(GenericAPIView):
    permission_classes = IsAuthenticated,
    filterset_class = SensorCO2Filter

    def get_queryset(self):
        indicator = self.request.query_params.get('indicator', default=None)
        status = self.request.query_params.get('status', default=None)
        queryset = SensorCO2.objects.none()

        if indicator:
            filters = {f'{indicator}__isnull': False}
            if status:
                filters[f'status_{indicator}'] = status
            queryset = SensorCO2.objects.filter(**filters)

            queryset = queryset.values(f'{indicator}', f'status_{indicator}',
                                       'created_at').order_by('-created_at')

        return queryset

    def get(self, request, *args, **kwargs):
        indicator = self.request.query_params.get('indicator')
        queryset = self.filter_queryset(self.get_queryset())
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = f'attachment; filename="report_{indicator}.csv"'
        if indicator:
            columns = ('created_at', f'{indicator}', f'status_{indicator}')
            queryset = queryset.values(*columns)
            df = pd.DataFrame(queryset)
            writer = csv.writer(response)
            writer.writerow(columns)
            if len(queryset):
                df = df.astype({'created_at': f'datetime64[ns, {TIME_ZONE}]'})
                rows = df.values.tolist()
                writer.writerows(rows)
            return response
        return response


class RoomReportDailyAPIView(GenericAPIView):
    permission_classes = IsAuthenticated,
    filterset_class = SensorCO2Filter
    queryset = SensorCO2.objects.all()

    def get(self, request, *args, **kwargs):
        room = self.request.query_params.get("room")
        queryset = self.filter_queryset(self.get_queryset())
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = f'attachment; filename="report_{room}.csv"'
        if room:
            columns = (
                'created_at', 'carbon_dioxide', 'status_carbon_dioxide', 'humidity', 'status_humidity', 'temperature',
                'status_temperature', 'illumination', 'status_illumination', 'tvoc', 'status_tvoc', 'hcho',
                'status_hcho', 'pm2', 'status_pm2', 'pm10', 'status_pm10', 'general_status')
            queryset = queryset.values(*columns)
            df = pd.DataFrame(queryset)
            writer = csv.writer(response)
            writer.writerow(columns)
            if len(queryset):
                df = df.astype({'created_at': f'datetime64[ns, {TIME_ZONE}]'})
                rows = df.values.tolist()
                writer.writerows(rows)
            return response
        return response


class MeasureIndicatorsByRoomLisAPIView(GenericAPIView):
    permission_classes = IsAuthenticated,

    def get_queryset(self):
        enterprise = self.request.user.enterprise
        queryset = Local.objects.filter(headquarter__enterprise=enterprise, id=self.kwargs['room']).first()
        return queryset

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        indicators = queryset.registered_indicators
        response = []
        if indicators:
            response = indicators.split(",")
        return Response(response)
