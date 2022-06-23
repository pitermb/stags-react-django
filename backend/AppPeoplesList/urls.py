from django.urls import path
from . import views

app_name = 'person'

urlpatterns = [
    path('person/', views.PersonListAPIView.as_view(), name='person_list')
]
