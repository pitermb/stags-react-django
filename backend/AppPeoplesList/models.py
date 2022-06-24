from django.db import models
from uuid import uuid4
from django.urls import reverse


class Person(models.Model):
    id_person = models.UUIDField(
        primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=50)
    password = models.CharField(max_length=16, null=True)
    age = models.IntegerField()
    peso = models.DecimalField(max_digits=5, decimal_places=2)
    altura = models.IntegerField()

    @property
    def imc(self):
        return self.peso / (self.altura * self.altura)

    class Meta:
        ordering = ['-name']

    def get_absolute_url(self):
        return reverse('model-detail-view', args=[str(self.id_person)])

    def __str__(self):
        return self.name
