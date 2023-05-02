from django_filters import DateFilter, NumberFilter, DateFromToRangeFilter
from django_filters.rest_framework import FilterSet

from apps.sensors.models import AverageRoomIndicators


class AverageRoomFilter(FilterSet):
    month = NumberFilter(field_name='created_at__month')
    room = NumberFilter(field_name='room_id')
    date_range = DateFromToRangeFilter(field_name='created_at__date')

    class Meta:
        model = AverageRoomIndicators
        fields = ('month', 'date_range')
