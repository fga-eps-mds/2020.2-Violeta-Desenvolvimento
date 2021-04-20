from rest_framework import viewsets
from . import models
from . import serializers


class CadProfissionaisViewset(viewsets.ModelViewSet):
    queryset = models.CadProfissionais.objects.all()
    serializer_class = serializers.CadProfissionaisSerializer


class ViolenciasCountViewset(viewsets.ModelViewSet):
    queryset = models.ViolenciasCount.objects.all()
    serializer_class = serializers.ViolenciasCountSerializer


class CategoriaViolenciaViewset(viewsets.ModelViewSet):
    queryset = models.CategoriaViolencia.objects.all()
    serializer_class = serializers.CategoriaViolenciaSerializer


class CategoriaContatoViewset(viewsets.ModelViewSet):
    queryset = models.CategoriaContato.objects.all()
    serializer_class = serializers.CategoriaContatoSerializer


class ContatoViolenciaViewset(viewsets.ModelViewSet):
    queryset = models.ContatoViolencia.objects.all()
    serializer_class = serializers.ContatoViolenciaSerializer


class QuestionarioViewset(viewsets.ModelViewSet):
    queryset = models.Questionario.objects.all()
    serializer_class = serializers.QuestionarioSerializer


class ContatoQuestionarioViewset(viewsets.ModelViewSet):
    queryset = models.ContatoQuestionario.objects.all()
    serializer_class = serializers.ContatoQuestionarioSerializer
