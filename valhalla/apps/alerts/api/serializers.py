from rest_framework import serializers

from apps.alerts.models import Alert, Comment
from apps.sensors.api.serializers import DeviceSerializer


class AlertSerializer(serializers.ModelSerializer):
    device = DeviceSerializer(read_only=True)
    number_comments = serializers.IntegerField(read_only=True)

    class Meta:
        model = Alert
        fields = ('id', 'created_at', 'hours', 'indicator', 'value', 'level', 'resolved', 'device', 'number_comments')
        read_only_fields = ['indicator', 'value', 'device', 'level', 'number_comments', 'hours']


class CommentSerializer(serializers.ModelSerializer):
    user_email = serializers.CharField(source='user.email', read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'created_at', 'content', 'user_email')
