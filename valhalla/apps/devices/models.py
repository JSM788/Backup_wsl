from django.core.validators import MaxValueValidator
from django.db import models

# Create your models here.
from apps.sensors.constants import INDICATORS


class Indicator(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True, choices=INDICATORS)

    class Meta:
        verbose_name = 'Indicador'
        verbose_name_plural = 'Indicadores'

    def __str__(self):
        return f'{self.name}'


class TypeSensor(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    indicators = models.ManyToManyField(Indicator, through="TypeSensorIndicator", blank=True)

    class Meta:
        verbose_name = 'Tipo de Sensor'
        verbose_name_plural = 'Tipos de Sensores'

    def __str__(self):
        return f'{self.name}'


class TypeSensorIndicator(models.Model):
    type_sensor = models.ForeignKey(TypeSensor, blank=True, null=True, on_delete=models.PROTECT)
    indicator = models.ForeignKey(Indicator, blank=True, null=True, on_delete=models.PROTECT)

    class Meta:
        verbose_name = 'Tipo de Sensor - Indicador'
        verbose_name_plural = 'Tipo de Sensores - Indicadores'

    def __str__(self):
        return f'{self.type_sensor} - {self.indicator}'
