from django.urls import path

from .views import *

urlpatterns = [
    path('gateway/test', GatewayCO2TestAPIView.as_view(), name='gateway-device'),
    path('gateway/socket', GatewaySocketAPIView.as_view(), name='gateway-socket'),
    path('refix/text', ReFixGatewayCO2TestAPIView.as_view(), name='refix'),
    path('enterprise/<int:enterprise>/salas', SaloonEnterpriseAPIView.as_view(), name='enterprise-salas'),
    path('headquarters/sensor/<int:device>', DeviceRetrieveAPIView.as_view(), name='device-retrieve'),
    path('room/<int:room>/measure-indicators', MeasureIndicatorsByRoomLisAPIView.as_view(),
         name='list-measured-indicators'),
    path('sensor/indicators', IndicatorsLisAPIView.as_view(), name='list-indicators'),
    path('sensor/indicators/report', IndicatorsReportAPIView.as_view(), name='indicator-reports'),
    path('room/report', RoomReportDailyAPIView.as_view(), name='room-report-daily'),
    path('room/<int:room>', RoomRetrieveAPIView.as_view(), name='room-retrieve'),
    path('promedio/general', PromedioApiView.as_view(), name='promedio-retrieve'),
    path('ultimas/<int:room>/general', LastDataAPIView.as_view(), name='ultimos-datos'),
    path('lastten/<int:room>/general', LastTenDataAPIView.as_view(), name='ultimas-diez'),
]
