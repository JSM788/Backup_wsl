from django.urls import path

from apps.statistic.api.views import IndicatorDailyStatisticsListAPIView, IndicatorDateStatisticsListAPIView, \
    DiscoveryDailyByIndicatorAPIView, DiscoveryCriticsByDayWeekAPIView, DiscoveryCriticsByStatusAPIView, PatternsByIndicatorAPIView

urlpatterns = [
    path("indicators/daily", view=IndicatorDailyStatisticsListAPIView.as_view(), name="daily-indicator-statistics"),
    path("indicators/monthly", view=IndicatorDateStatisticsListAPIView.as_view(), name="date-indicator-statistics"),
    path("discovery/daily", view=DiscoveryDailyByIndicatorAPIView.as_view(), name="daily-discovery"),
    path("discovery/critics", view=DiscoveryCriticsByDayWeekAPIView.as_view(), name="critics-discovery"),
    path("discovery/critics_status", view=DiscoveryCriticsByStatusAPIView.as_view(), name="critics-discovery"),
    path("patterns/indicator/<int:room>", view=PatternsByIndicatorAPIView.as_view(), name="patterns-by-indicator"),
]
