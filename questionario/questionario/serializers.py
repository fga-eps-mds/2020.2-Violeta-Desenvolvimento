from rest_framework import serializers
from .models import (CadProfissionais, CategoriaViolencia, ContatoViolencia, Questionario,
                     ContatoQuestionario)

class CadProfissionaisSerializer(serializers.ModelSerializer):
    class Meta: 
        model = CadProfissionais
        fields = '__all__'

class CategoriaViolenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoriaViolencia
        fields = '__all__'


class ContatoViolenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContatoViolencia
        fields = '__all__'


class QuestionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questionario
        fields = '__all__'


class ContatoQuestionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContatoQuestionario
        fields = '__all__'
