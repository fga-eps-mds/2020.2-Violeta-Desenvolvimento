from rest_framework import viewsets
from depoimento.models import (Depoimento)
from depoimento.serializers import (ExternalDepoimentoSerializer,
                                    DepoimentoSerializer,)

from drf_yasg.utils import swagger_auto_schema


class DepoimentoViewset(viewsets.ModelViewSet):
    queryset = Depoimento.objects.all()
    serializer_class = DepoimentoSerializer

    @swagger_auto_schema(
        request_body=DepoimentoSerializer,
        response={200: DepoimentoSerializer},
        operation_description="Lista detalhada de todos os depoimentos")
    def perform_create(self, serializer):
        serializer.save()


class ExternalDepoimentoViewset(viewsets.ModelViewSet):
    queryset = Depoimento.objects.filter(aprovado=True)
    serializer_class = ExternalDepoimentoSerializer

    @swagger_auto_schema(request_body=ExternalDepoimentoSerializer,
                         response={200: ExternalDepoimentoSerializer},
                         operation_description="Lista todos os depoimentos")
    def perform_create(self, serializer):
        serializer.save()
