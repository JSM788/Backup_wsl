from datetime import datetime

from rest_framework import serializers

from ..models import Local, Device, SensorCO2, AverageRoomIndicators
from apps.enterprise.api.serializers import HeadquarterSerializer


class SalasSerializer(serializers.ModelSerializer):
    num_sensor = serializers.IntegerField()
    code_sensors = serializers.ListField()
    headquarter_name = serializers.CharField()

    class Meta:
        model = Local
        fields = ('id', 'created_at', 'code', 'name', 'description', 'num_sensor', 'code_sensors',
                  'headquarter_name', 'status')


class SensorDatosSerializer(serializers.ModelSerializer):
    room = serializers.SerializerMethodField()

    class Meta:
        model = SensorCO2
        fields = (
            'id', 'created_at', 'device', 'carbon_dioxide', 'status_carbon_dioxide', 'temperature',
            'status_temperature', 'humidity', 'status_humidity', 'pm2', 'status_pm2', 'pm10', 'status_pm10', 'tvoc',
            'status_tvoc', 'hcho', 'status_hcho', 'ozone', 'status_ozone', 'pressure', 'status_pressure', 'pir',
            'status_pir', 'illumination', 'status_illumination', 'room', 'general_status')

    def get_room(self, obj):
        return getattr(obj, 'room').name

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        date_to = datetime.strptime(representation['created_at'], '%Y-%m-%dT%H:%M:%S.%f%z')
        representation['hours'] = date_to.strftime('%I:%M %p')

        return representation


class SensorsSerializer(serializers.ModelSerializer):
    local_name = serializers.CharField()

    class Meta:
        model = Device
        fields = (
            'id', 'created_at', 'local_name', 'dev_eui', 'description')


class LocalSerializer(serializers.ModelSerializer):
    headquarter_id = serializers.IntegerField()
    device_assigned = serializers.BooleanField()

    class Meta:
        model = Local
        fields = ('id', 'name', 'headquarter_id', 'device_assigned')


class DeviceSerializer(serializers.ModelSerializer):
    local = LocalSerializer()

    class Meta:
        model = Device
        fields = ('id', 'name', 'local')


class IndicatorSerializer(serializers.ModelSerializer):
    status = serializers.SerializerMethodField()
    value_indicator = serializers.SerializerMethodField()

    class Meta:
        model = SensorCO2
        fields = ('value_indicator', 'status', 'created_at')

    def get_value_indicator(self, obj):
        return obj[f'{self.context["indicator"]}']

    def get_status(self, obj):
        return obj[f'status_{self.context["indicator"]}']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        date_to = datetime.strptime(representation['created_at'], '%Y-%m-%dT%H:%M:%S.%f%z')
        representation['hours'] = date_to.strftime('%I:%M %p')
        representation['date'] = date_to.strftime('%Y-%m-%d')
        return representation


class AvergareSerializer(serializers.ModelSerializer):
    status = serializers.SerializerMethodField()
    value_indicator = serializers.SerializerMethodField()
    room_name = serializers.SerializerMethodField()

    class Meta:
        model = AverageRoomIndicators
        fields = ('value_indicator', 'status', 'modified_at', 'room_name')

    def get_value_indicator(self, obj):
        return obj[f'{self.context["indicator"]}']

    def get_status(self, obj):
        return obj[f'status_{self.context["indicator"]}']

    def get_room_name(self, obj):
        return Local.objects.filter(id=obj['room']).first().name
