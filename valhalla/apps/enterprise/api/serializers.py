from datetime import datetime
from rest_framework import serializers
from apps.enterprise.models import Enterprise, Headquarters

from apps.sensors.models import Local


class EnterpriseSerializer(serializers.ModelSerializer):
    first_room = serializers.IntegerField()

    class Meta:
        model = Enterprise
        fields = ('name', 'acronym', 'first_room')


class HeadquarterSerializer(serializers.ModelSerializer):
    enterprise = EnterpriseSerializer()

    class Meta:
        model = Headquarters
        fields = '__all__'


class HeadquarterBasicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Headquarters
        fields = '__all__'


class RoomSerializer(serializers.ModelSerializer):
    date_created = serializers.SerializerMethodField()

    class Meta:
        model = Local
        fields = ('id', 'name', 'date_created')

    def get_date_created(self, obj):
        date_creted = obj.created_at.strftime('%Y-%m-%d')
        return date_creted
