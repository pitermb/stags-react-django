from django.db import models


class Person(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    peso = models.DecimalField(max_digits=5, decimal_places=2)
    altura = models.IntegerField()
    imc = models.DecimalField(max_digits=5, decimal_places=2)
