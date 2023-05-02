from django.contrib import admin

from apps.alerts.models import Comment, Alert

admin.site.register(Alert)
admin.site.register(Comment)
