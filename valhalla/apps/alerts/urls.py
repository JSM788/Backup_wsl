from django.urls import path, include

urlpatterns = [
    path('alerts/', include('apps.alerts.api.urls'))
]
