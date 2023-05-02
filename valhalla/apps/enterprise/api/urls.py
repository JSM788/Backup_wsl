from django.urls import path

from .views import EnterpriseListAPIView, EnterpriseRetrieveAPIView, HeadquarterListAPIView, HeadquarterRetrieveAPIView, \
    HeadquarterSelectorListAPIView, RoomListAPIView

urlpatterns = [
    path('enterprise', EnterpriseListAPIView.as_view(), name='enterprise_list'),
    path('enterprise/headquearters', HeadquarterListAPIView.as_view(), name='headquarter_list'),
    path('enterprise/rooms', RoomListAPIView.as_view(), name='rooms_list'),
    path('enterprise/detail', EnterpriseRetrieveAPIView.as_view(), name='enterprise_detail'),
    path('headquarter/<int:id>', HeadquarterRetrieveAPIView.as_view(), name='headquarter_detail'),
]
