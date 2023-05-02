from apps.statistic.constans import INDICATORS
from config.settings.base import TIME_ZONE
from rest_framework import status
from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated
from django.db.models.functions import Cast
from django.db.models import FloatField, Avg
from django.utils.datetime_safe import datetime
from rest_framework.response import Response
import pandas as pd
from datetime import timedelta
from apps.sensors.api.filters import SensorCO2Filter
from apps.sensors.models import SensorCO2, statistics_status_indicator, AverageRoomIndicators
from apps.statistic.api.filters import AverageRoomFilter
from apps.statistic.api.serializers import AverageIndicatorSerializer
from apps.statistic.models import ModelIA


class IndicatorDailyStatisticsListAPIView(GenericAPIView):
    permission_classes = IsAuthenticated,
    filterset_class = SensorCO2Filter

    def get_queryset(self):
        enterprise = self.request.user.enterprise
        return SensorCO2.objects.filter(room__headquarter__enterprise_id=enterprise.id)

    def get(self, request, *args, **kwargs):
        indicator = self.request.query_params.get('indicator')
        date = self.request.query_params.get("date")
        room = self.request.query_params.get("room")
        queryset = self.get_queryset()
        data_response = {}
        if room and date and indicator not in (None, "pir") and len(queryset):
            queryset = self.filter_queryset(queryset.values('created_at', f'{indicator}'))
            data_response = {"date": date, "results": []}
            for i in range(24):
                prom_avg = queryset.filter(created_at__hour=i).annotate(
                    indicator=Cast(f'{indicator}', FloatField())).aggregate(Avg('indicator'))['indicator__avg']
                prom_avg = None if not prom_avg else round(prom_avg, 1)
                data = {
                    f'hours': i,
                    'value_indicator': prom_avg,
                    'status': statistics_status_indicator(indicator, prom_avg)
                }
                data_response['results'].append(data)
        return Response(data_response, status=status.HTTP_200_OK)


class IndicatorDateStatisticsListAPIView(ListAPIView):
    permission_classes = IsAuthenticated,
    filterset_class = AverageRoomFilter
    serializer_class = AverageIndicatorSerializer

    def get_queryset(self):
        enterprise = self.request.user.enterprise
        return AverageRoomIndicators.objects.filter(room__headquarter__enterprise_id=enterprise.id).order_by(
            'created_at')

    def get_serializer_context(self):
        indicator = self.request.query_params.get('indicator', default=None)
        context = super(IndicatorDateStatisticsListAPIView, self).get_serializer_context()
        if indicator:
            context.update({'indicator': indicator})
        return context


class DiscoveryDailyByIndicatorAPIView(GenericAPIView):
    permission_classes = IsAuthenticated,
    filterset_class = SensorCO2Filter

    def get_queryset(self):
        enterprise = self.request.user.enterprise
        today = datetime.today().date()
        return SensorCO2.objects.filter(room__headquarter__enterprise_id=enterprise.id,
                                        created_at__date=today).order_by("created_at")

    def get(self, request, *args, **kwargs):
        indicator = self.request.query_params.get('indicator', default=None)
        room = self.request.query_params.get("room")
        queryset = self.filter_queryset(self.get_queryset())
        data_response = {}
        if indicator not in (None, "pir") and room and len(queryset):
            queryset = queryset.values('created_at', f'{indicator}', f'status_{indicator}')
            df = pd.DataFrame(list(queryset))
            df = df.astype({"created_at": f"datetime64[ns, {TIME_ZONE}]", f"{indicator}": "float32"})
            df['start_streak'] = df[f'status_{indicator}'].ne(df[f'status_{indicator}'].shift())
            df['streak_id'] = df['start_streak'].cumsum()
            df['time'] = (df['created_at'] - df['created_at'].shift())
            df['accumulated_time'] = df.groupby(['streak_id'])['time'].cumsum()
            time_total = (df.loc[df.index[-1], 'created_at'] - df.loc[df.index[0], 'created_at'])
            data_response = df.groupby(f'status_{indicator}')['time'].sum().to_dict()
            for s in ("LOW", "NORMAL", "HIGH"):
                if s in data_response:
                    time = data_response[s]
                    percent = (100 * time / time_total)
                    hour = time / timedelta(hours=1)
                    data_response[s] = {"hours": round(hour, 2), "percent": round(percent, 2)}
                else:
                    data_response[s] = {"hours": 0, "percent": 0}
        return Response(data_response, status=status.HTTP_200_OK)


class DiscoveryCriticsByDayWeekAPIView(GenericAPIView):
    permission_classes = IsAuthenticated,
    filterset_class = SensorCO2Filter

    def get_queryset(self):
        day_ago_30 = datetime.today().date() - timedelta(days=30)
        enterprise = self.request.user.enterprise
        return SensorCO2.objects.filter(room__headquarter__enterprise_id=enterprise.id,
                                        created_at__date__gte=day_ago_30).order_by("-created_at")

    def get(self, request, *args, **kwargs):
        indicator = self.request.query_params.get('indicator')
        room = self.request.query_params.get("room")
        queryset = self.get_queryset()
        data_response = {}
        if indicator not in (None, "pir") and room and len(queryset):
            queryset = queryset.values('created_at', f'{indicator}', f'status_{indicator}')
            queryset = self.filter_queryset(queryset)
            if len(queryset) > 0:
                df = pd.DataFrame(list(queryset))
                df = df.rename(columns={f"{indicator}": "value", f"status_{indicator}": "status"})
                df = df.astype({"created_at": f"datetime64[ns, {TIME_ZONE}]", "value": "float32"})
                df["day_week"] = df["created_at"].dt.dayofweek
                data_response = df.iloc[df.reset_index().groupby("day_week")["value"].idxmax()][
                    ["day_week", "created_at", "value", "status"]]
                data_response = data_response.set_index("day_week").to_dict()
        return Response(data_response, status=status.HTTP_200_OK)


class DiscoveryCriticsByStatusAPIView(GenericAPIView):
    permission_classes = IsAuthenticated,

    def get_queryset(self):
        day_ago_30 = datetime.today().date() - timedelta(days=30)
        enterprise = self.request.user.enterprise
        return SensorCO2.objects.filter(room__headquarter__enterprise_id=enterprise.id,
                                        created_at__date__gte=day_ago_30).order_by("-created_at")

    def get(self, request, *args, **kwargs):
        indicator = self.request.query_params.get('indicator')
        room = self.request.query_params.get("room")
        queryset = self.get_queryset()
        data_response = {}
        if indicator not in (None, "pir") and room and len(queryset):
            queryset = queryset.values('created_at', f'{indicator}', f'status_{indicator}')
            queryset = queryset.filter(room_id=room)
            df = pd.DataFrame(list(queryset))
            df = df.rename(columns={f"{indicator}": "value", f"status_{indicator}": "status"})
            df = df.astype({"created_at": f"datetime64[ns, {TIME_ZONE}]", "value": "float32"})
            data_response = df.iloc[df.reset_index().groupby("status")["value"].idxmax()][
                ["created_at", "value", "status"]]
            data_response = data_response.set_index("status").to_dict()
        return Response(data_response, status=status.HTTP_200_OK)


class PatternsByIndicatorAPIView(GenericAPIView):
    permission_classes = IsAuthenticated,

    def get_queryset(self):
        enterprise = self.request.user.enterprise
        qs = ModelIA.objects.filter(room__headquarter__enterprise=enterprise.id)
        return qs

    def get(self, request, *args, **kwargs):
        id_room = self.kwargs['room']
        indicator = self.request.query_params.get('indicator')
        df = []
        if indicator in INDICATORS.keys() and id_room:
            id_indicator = INDICATORS[indicator]
            qs = self.get_queryset().filter(room_id=id_room, indicator_id=id_indicator).first()
            if qs:
                df = qs.recurring_patterns
        return Response(df, status=status.HTTP_200_OK)
