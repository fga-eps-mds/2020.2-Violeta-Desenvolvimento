from rest_framework import viewsets
from . import models
from . import serializers

class DepoimentoViewset(viewsets.ModelViewSet):
    queryset = models.Depoimento.objects.all()
    serializer_class = serializers.DepoimentoSerializer

class ExternalDepoimentoViewset(viewsets.ModelViewSet):
    queryset = models.Depoimento.objects.filter(aprovado=True)
    serializer_class = serializers.ExternalDepoimentoSerializer