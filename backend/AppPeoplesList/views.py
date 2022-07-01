from rest_framework import generics
from .models import Person
from .serializers import PersonSerializer
from rest_framework.permissions import IsAuthenticated


class PersonListAPIView(generics.ListAPIView, generics.CreateAPIView):
    serializer_class = PersonSerializer
    permission_classes = (IsAuthenticated, )
    queryset = Person.objects.all()
