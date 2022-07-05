from rest_framework import mixins, viewsets
from .models import Person
from .serializers import PersonSerializer
from rest_framework.permissions import IsAuthenticated


class PersonListAPIView(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    serializer_class = PersonSerializer
    permission_classes = (IsAuthenticated, )
    queryset = Person.objects.all()
