from rest_framework import serializers
from .models import Person
import base64
from django.core.files.base import ContentFile


class LGPDBase64SingleFileSerializer(serializers.FileField):
    def to_internal_value(self, file):

        if not isinstance(file, str):
            data = file["filecontent"]
            file_name = file["filename"]

            if 'data:' in data and ';base64,' in data:
                _, data = data.split(';base64,')
            else:
                self.fail("Arquivo inválido")

            try:
                decoded_file = base64.b64decode(data)
            except TypeError:
                self.fail('Arquivo inválido')

            data = ContentFile(decoded_file, name=file_name)

            return super(LGPDBase64SingleFileSerializer, self).to_internal_value(data)

        return super(LGPDBase64SingleFileSerializer, self).to_internal_value(file)


class PersonSerializer(serializers.ModelSerializer):
    image = LGPDBase64SingleFileSerializer()

    class Meta:
        model = Person
        fields = '__all__'

    def to_representation(self, instance):
        representation = super(
            PersonSerializer, self).to_representation(instance)
        representation['imc'] = instance.imc
        return representation
