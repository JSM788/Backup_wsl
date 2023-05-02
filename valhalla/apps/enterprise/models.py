from django.db import models
from enum import Enum
import pytz
from datetime import datetime

timezone = pytz.timezone('America/Lima')


# Create your models here.
class Enterprise(models.Model):
    name = models.CharField(verbose_name='nombre', max_length=300, blank=True, null=True)
    acronym = models.CharField(verbose_name='siglas', max_length=2, blank=True, null=True)
    date_installation = models.DateField(verbose_name='instalacion', blank=True, null=True)

    @property
    def first_room(self):
        first_room = self.headquarters_set.order_by('id').first().local_set.first()
        return first_room.id

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'Empresa'
        verbose_name_plural = 'Empresas'


class Headquarters(models.Model):
    enterprise = models.ForeignKey(Enterprise, blank=True, null=True, on_delete=models.PROTECT)
    name = models.CharField(verbose_name='nombre de la sede', max_length=300, blank=True, null=True)

    def __str__(self):
        return f'{self.enterprise} - {self.name}'

    class Meta:
        verbose_name = 'sede'
        verbose_name_plural = 'sedes'
