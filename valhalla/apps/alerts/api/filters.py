from django_filters import MultipleChoiceFilter, BooleanFilter, DateFilter, DateFromToRangeFilter, NumberFilter
from django_filters.rest_framework import FilterSet

from apps.alerts.models import Alert
from apps.sensors.constants import INDICATORS, LEVELS


class AlertFilter(FilterSet):
    indicator = MultipleChoiceFilter(field_name='indicator', choices=INDICATORS)
    level = MultipleChoiceFilter(field_name='level', choices=LEVELS)
    created_at = DateFromToRangeFilter(field_name='created_at__date')
    date = DateFilter(field_name='created_at__date')
    hour = NumberFilter(field_name='created_at__hour')
    resolved = BooleanFilter(field_name='resolved')
    headquarter = NumberFilter(field_name='device__local__headquarter_id')
    room = NumberFilter(field_name='device__local_id')

    class Meta:
        model = Alert
        fields = ('device', 'level', 'indicator', 'created_at', 'date', 'headquarter', 'room', 'hour')
