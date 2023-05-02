from django.urls import path, re_path
from django.urls import reverse, reverse_lazy
from django.contrib.auth import views
from .views import LoginAPIView, CreateUserAPIView, RUDUserAPIView, ListUsersByEnterpriseAPIView

urlpatterns = [
    path("token/", view=LoginAPIView.as_view(), name="login"),
    path("create/", view=CreateUserAPIView.as_view(), name="user-create"),
    path("detail/", view=RUDUserAPIView.as_view(), name="user-detail"),
    path("list/", view=ListUsersByEnterpriseAPIView.as_view(), name='user-list')

]
