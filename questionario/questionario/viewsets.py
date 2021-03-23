from rest_framework import viewsets
from . import models 
from .models import SalvarDados
from . import serializers
"""from .serializers import SalvarDadosSerializer
from .serializers import CadastroProfissionaisSerializer"""

class CadastroProfissionaisViewset(viewsets.ModelViewSet):
    queryset = models.CadastroProfissionais.objects.all()
    serializer_class = serializers.CadastroProfissionaisSerializer

class SalvarDadosViewset(viewsets.ModelViewSet):
    queryset = models.SalvarDados.objects.all()
    serializer_class = serializers.SalvarDadosSerializer

class CategoriaViolenciaViewset(viewsets.ModelViewSet):
    queryset = models.CategoriaViolencia.objects.all()
    serializer_class = serializers.CategoriaViolenciaSerializer

class ContatoViolenciaViewset(viewsets.ModelViewSet):
    queryset = models.ContatoViolencia.objects.all()
    serializer_class = serializers.ContatoViolenciaSerializer


class QuestionarioViewset(viewsets.ModelViewSet):
    queryset = models.Questionario.objects.all()
    serializer_class = serializers.QuestionarioSerializer


class ContatoQuestionarioViewset(viewsets.ModelViewSet):
    queryset = models.ContatoQuestionario.objects.all()
    serializer_class = serializers.ContatoQuestionarioSerializer
