from django_filters import CharFilter, DateFilter, TimeFilter, NumberFilter, DateFromToRangeFilter
from django_filters.rest_framework import FilterSet

from apps.sensors.models import SensorCO2, Local, AverageRoomIndicators


class SensorCO2Filter(FilterSet):
    headquarter = NumberFilter(field_name='room__headquarter_id')
    device = NumberFilter(field_name='device_id')
    room = NumberFilter(field_name='room_id')
    date = DateFilter(field_name='created_at__date')
    hour = NumberFilter(field_name='created_at__hour')
    range_date = DateFromToRangeFilter(field_name='created_at__date')

    class Meta:
        model = SensorCO2
        fields = ('headquarter', 'room', 'date', 'hour', 'range_date', 'device')


class LocalFilter(FilterSet):
    headquarter = NumberFilter(field_name='headquarter_id')
    status = CharFilter(field_name='status')

    class Meta:
        model = Local
        fields = ('headquarter', 'status')


class AverageRoomIndicatorsFilter(FilterSet):
    headquarter = NumberFilter(field_name='room__headquarter_id')
    room = NumberFilter(field_name='room_id')
    date = DateFilter(field_name='created_at__date')
    hour = NumberFilter(field_name='created_at__hour')

    class Meta:
        model = AverageRoomIndicators
        fields = ('headquarter', 'room', 'date', 'hour')
