from django.contrib import admin
from .models import TypeSensor, Indicator, TypeSensorIndicator

# Register your models here.

admin.site.register(TypeSensor)
admin.site.register(Indicator)
admin.site.register(TypeSensorIndicator)
