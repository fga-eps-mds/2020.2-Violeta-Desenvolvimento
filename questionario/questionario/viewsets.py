from rest_framework import viewsets
from . import models
from .serializers import (
    ViolenciasCountSerializer,
    CategoriaViolenciaSerializer,
    CategoriaContatoSerializer,
    ContatoViolenciaSerializer,
    QuestionarioSerializer,
    ContatoQuestionarioSerializer
)

from drf_yasg.utils import swagger_auto_schema


class ViolenciasCountViewset(viewsets.ModelViewSet):
    queryset = models.ViolenciasCount.objects.all()
    serializer_class = ViolenciasCountSerializer

    @swagger_auto_schema(
        request_body=ViolenciasCountSerializer,
        response={200: ViolenciasCountSerializer},
        operation_description="Lista de ocorrências de cada tipo de violência")
    def perform_create(self, serializer):
        serializer.save()


class CategoriaViolenciaViewset(viewsets.ModelViewSet):
    queryset = models.CategoriaViolencia.objects.all()
    serializer_class = CategoriaViolenciaSerializer

    @swagger_auto_schema(
        request_body=CategoriaViolenciaSerializer,
        response={200: CategoriaViolenciaSerializer},
        operation_description="Lista de categorias de violência")
    def perform_create(self, serializer):
        serializer.save()


class CategoriaContatoViewset(viewsets.ModelViewSet):
    queryset = models.CategoriaContato.objects.all()
    serializer_class = CategoriaContatoSerializer

    @swagger_auto_schema(
        request_body=CategoriaContatoSerializer,
        response={200: CategoriaContatoSerializer},
        operation_description="Lista de categorias dos contatos")
    def perform_create(self, serializer):
        serializer.save()


class ContatoViolenciaViewset(viewsets.ModelViewSet):
    queryset = models.ContatoViolencia.objects.all()
    serializer_class = ContatoViolenciaSerializer

    @swagger_auto_schema(
        request_body=ContatoViolenciaSerializer,
        response={200: ContatoViolenciaSerializer},
        operation_description="Lista de contatos de profissionais")
    def perform_create(self, serializer):
        serializer.save()


class QuestionarioViewset(viewsets.ModelViewSet):
    queryset = models.Questionario.objects.all()
    serializer_class = QuestionarioSerializer

    @swagger_auto_schema(
        request_body=QuestionarioSerializer,
        response={200: QuestionarioSerializer},
        operation_description="Armazenamento da árvore de decisões do questionário")
    def perform_create(self, serializer):
        serializer.save()


class ContatoQuestionarioViewset(viewsets.ModelViewSet):
    queryset = models.ContatoQuestionario.objects.all()
    serializer_class = ContatoQuestionarioSerializer

    @swagger_auto_schema(
        request_body=ContatoQuestionarioSerializer,
        response={200: ContatoQuestionarioSerializer},
        operation_description="Lista de contatos indicados ao responder o questionário")
    def perform_create(self, serializer):
        serializer.save()
