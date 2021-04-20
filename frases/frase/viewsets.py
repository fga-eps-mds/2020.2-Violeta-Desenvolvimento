from rest_framework import viewsets
from .models import Frases
from .serializers import FrasesSerializer


class FrasesViewset(viewsets.ModelViewSet):
    queryset = Frases.objects.all()
    serializer_class = FrasesSerializer
