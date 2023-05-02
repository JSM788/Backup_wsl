import csv

from django.db.models import Count, Q
from django.http import HttpResponse
from django.utils import timezone
from django.utils.datetime_safe import datetime
from rest_framework import generics, status
from rest_framework.generics import get_object_or_404, GenericAPIView
from rest_framework.response import Response

from apps.alerts.api.filters import AlertFilter
from apps.alerts.api.serializers import AlertSerializer, CommentSerializer
from apps.alerts.models import Alert, Comment
from apps.sensors.constants import INDICATOR_LIST


class ListAlertAPI(generics.ListAPIView):
    serializer_class = AlertSerializer
    filter_class = AlertFilter

    def get_queryset(self):
        enterprise = self.request.user.enterprise
        queryset = Alert.objects.filter(
            device__local__headquarter__enterprise_id=enterprise.id).annotate(
            number_comments=Count('comments')).order_by('-created_at')
        return queryset


class RetrieveUpdateAlertAPI(generics.RetrieveUpdateAPIView):
    serializer_class = AlertSerializer

    def get_object(self):
        enterprise = self.request.user.enterprise
        return get_object_or_404(
            Alert.objects.filter(device__local__headquarter__enterprise_id=enterprise.id),
            id=self.kwargs.get('alert_id')
        )


class ListCreateCommentByAlertAPI(generics.ListCreateAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        alert_id = self.kwargs.get('alert_id')
        return Comment.objects.filter(alert__id=alert_id)

    def perform_create(self, serializer):
        user = self.request.user
        alert = get_object_or_404(
            Alert.objects.filter(device__local__headquarter__enterprise_id=user.enterprise.id),
            id=self.kwargs.get('alert_id')
        )
        serializer.save(alert=alert, user=self.request.user)


class StadisticsAlertstAPI(generics.GenericAPIView):
    filterset_class = AlertFilter

    def get_queryset(self):
        user = self.request.user
        queryset = Alert.objects.filter(device__local__headquarter__enterprise_id=user.enterprise.id,
                                        indicator__in=INDICATOR_LIST).order_by(
            '-created_at')
        return queryset

    def get(self, request, *args, **kwargs):
        filter_last = self.request.query_params.get('filter_last')
        queryset = self.filter_queryset(self.get_queryset())
        if filter_last:
            queryset = queryset[:int(filter_last)]
        data = queryset.aggregate(num_resolved=Count('resolved', filter=Q(resolved=True)),
                                  num_unresolved=Count('resolved', filter=Q(resolved=False)))
        return Response(data, status=status.HTTP_200_OK)


class AlertsReportAPIView(GenericAPIView):
    filterset_class = AlertFilter

    def get_queryset(self):
        resolved = self.request.query_params.get('resolved')
        resolved = None if not resolved else resolved.capitalize()
        enterprise = self.request.user.enterprise
        queryset = Alert.objects.filter(
            device__local__headquarter__enterprise_id=enterprise.id,
        )
        if resolved:
            queryset = queryset.filter(resolved=resolved)
        queryset.annotate(number_comments=Count('comments')).order_by('-created_at')
        return queryset

    def get(self, request, *args, **kwargs):
        indicator = self.request.query_params.get('indicator')
        queryset = self.filter_queryset(self.get_queryset())
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = f'attachment; filename="alert_reports.csv"'
        if indicator:
            response['Content-Disposition'] = f'attachment; filename="alert_reports_{indicator}.csv"'
        columns = list(map(lambda x: x.name, queryset.model._meta.fields))
        queryset = queryset.values_list(*columns)
        writer = csv.writer(response)
        writer.writerow(columns)
        writer.writerows(queryset)
        return response
