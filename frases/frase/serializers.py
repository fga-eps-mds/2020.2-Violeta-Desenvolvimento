from rest_framework import serializers
from .models import Frases


class FrasesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Frases
        fields = '__all__'
