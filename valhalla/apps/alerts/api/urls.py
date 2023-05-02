from django.urls import path

from apps.alerts.api.views import ListAlertAPI, ListCreateCommentByAlertAPI, RetrieveUpdateAlertAPI, \
    StadisticsAlertstAPI, AlertsReportAPIView

urlpatterns = [
    path("", view=ListAlertAPI.as_view(), name="list-alerts"),
    path("report/", view=AlertsReportAPIView.as_view(), name="alert-reports"),
    path("<int:alert_id>/", view=RetrieveUpdateAlertAPI.as_view(), name="retrieve-update-alerts"),
    path("<int:alert_id>/comments/", view=ListCreateCommentByAlertAPI.as_view(), name="list-create-comment"),
    path("statistics/", view=StadisticsAlertstAPI.as_view(), name="statistics-alerts")
]
