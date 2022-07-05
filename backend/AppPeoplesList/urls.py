from django.urls import path
from django.urls.conf import include
from . import views
from rest_framework.routers import DefaultRouter

app_name = 'person'

router = DefaultRouter()
router.register('person', views.PersonListAPIView)

urlpatterns = [
    path('', include(router.urls))
]
