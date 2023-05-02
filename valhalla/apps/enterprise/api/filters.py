from django_filters import NumberFilter
from django_filters.rest_framework import FilterSet

from apps.enterprise.models import Headquarters, Enterprise


class HeadquarterFilter(FilterSet):
    enterprise = NumberFilter(field_name='enterprise_id')

    class Meta:
        model = Headquarters
        fields = ('enterprise',)


class RoomFilter(FilterSet):
    headquarter = NumberFilter(field_name='headquarter_id')

    class Meta:
        model = Headquarters
        fields = ('headquarter',)


class EnterpriseFilter(FilterSet):
    enterprise = NumberFilter(field_name='id')

    class Meta:
        model = Enterprise
        fields = ('id',)
