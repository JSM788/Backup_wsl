from datetime import datetime

from rest_framework import serializers

from apps.sensors.models import AverageRoomIndicators


class AverageIndicatorSerializer(serializers.ModelSerializer):
    value_indicator = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()

    class Meta:
        model = AverageRoomIndicators
        fields = ('value_indicator', 'status', 'created_at')

    def get_value_indicator(self, obj):
        return getattr(obj, self.context["indicator"])

    def get_status(self, obj):
        return getattr(obj, f'status_{self.context[f"indicator"]}')

    def to_representation(self, instance):
        months = {'01': 'Ene', '02': 'Feb', '03': 'Mar', '04': 'Abr', '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Ago',
                  '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dic'}
        representation = super().to_representation(instance)
        date_to = datetime.strptime(representation['created_at'], '%Y-%m-%dT%H:%M:%S.%f%z')
        day, month = date_to.strftime('%d %m').split(' ')
        representation['created_at'] = f"{day}-{months[month]}"
        return representation
