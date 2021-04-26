from rest_framework import viewsets
from .models import (Frases)
from .serializers import FrasesSerializer
from drf_yasg.utils import swagger_auto_schema


class FrasesViewset(viewsets.ModelViewSet):
    queryset = Frases.objects.all()
    serializer_class = FrasesSerializer

    @swagger_auto_schema(
        request_body=FrasesSerializer,
        response={200: FrasesSerializer},
        operation_description="Lista detalhada de todos os depoimentos")
    def perform_create(self, serializer):
        serializer.save()
