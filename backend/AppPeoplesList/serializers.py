from rest_framework import serializers
from .models import Person


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'

    def to_representation(self, instance):
        representation = super(
            PersonSerializer, self).to_representation(instance)
        representation['imc'] = instance.imc
        return representation
