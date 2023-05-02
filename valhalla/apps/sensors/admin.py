from django.contrib import admin

from .models import SensorCO2, Device, Local, AverageRoomIndicators

# Register your models here.
admin.site.register(Local)
admin.site.register(Device)
admin.site.register(SensorCO2)
admin.site.register(AverageRoomIndicators)
