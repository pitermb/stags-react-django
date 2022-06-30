from django.db import models
from uuid import uuid4
from django.urls import reverse


def upload_image_book(instance, filename):
    return f"{instance.id_person}-{filename}"


class Person(models.Model):
    id_person = models.UUIDField(
        primary_key=True, default=uuid4, editable=False)
    user = models.CharField(max_length=12)
    name = models.CharField(max_length=50)
    password = models.CharField(max_length=16, null=True)
    age = models.IntegerField()
    peso = models.DecimalField(max_digits=5, decimal_places=2)
    altura = models.DecimalField(max_digits=3, decimal_places=2)
    image = models.ImageField(
        upload_to=upload_image_book, blank=True, null=True)

    @property
    def imc(self):
        return self.peso / (self.altura * self.altura)

    class Meta:
        ordering = ['-user']

    def get_absolute_url(self):
        return reverse('model-detail-view', args=[str(self.id_person)])

    def __str__(self):
        return self.user
