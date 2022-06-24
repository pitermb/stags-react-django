from rest_framework import generics, permissions
from .models import Person
from .serializers import PersonSerializer


class PersonListAPIView(generics.ListAPIView):
    serializer_class = PersonSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Person.objects.all()
