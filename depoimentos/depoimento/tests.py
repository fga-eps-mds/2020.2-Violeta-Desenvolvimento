import os
from rest_framework.test import APITestCase
from rest_framework import status
from .models import (Depoimento)
from .serializers import (DepoimentoSerializer, ExternalDepoimentoSerializer)


BASE_URL = os.environ['BASE_URL']


class DepoimentoTestCase(APITestCase):
    url = 'http://localhost:8003/' + BASE_URL + 'api/depoimento/'

    def setUp(self):
        self.depoimento1 = Depoimento.objects.create(
            aprovado=False, ds_depoimento='Este depoimento é falso')

    def testPost(self):
        data = {
            'aprovado': self.depoimento1.aprovado,
            'ds_depoimento': self.depoimento1.ds_depoimento
        }
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        response = self.client.get(self.url)
        posts = Depoimento.objects.all()
        serializer = DepoimentoSerializer(posts, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def testPut(self):
        data = {
            'id_depoimento': self.depoimento1.id_depoimento,
            'aprovado': True,
            'ds_depoimento': 'Agora é verdadeiro'
        }
        data_serializer = {
            'id_depoimento': self.depoimento1.id_depoimento,
            'aprovado': True,
            'ds_depoimento': 'Agora é verdadeiro'
        }
        response = self.client.put(
            self.url + str(self.depoimento1.id_depoimento) + '/', data)
        serializer = DepoimentoSerializer(data_serializer)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testDelete(self):
        response = self.client.delete(
            self.url + str(self.depoimento1.id_depoimento) + '/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)


class ExternalDepoimentoTestCase(APITestCase):
    urlE = 'http://localhost:8003/depoimentos/api/external-depoimento/'

    def setUp(self):
        self.depoimento2 = Depoimento.objects.create(
            aprovado=True, ds_depoimento='Este depoimento é verdadeiro')

    def testPost(self):
        data = {
            'aprovado': self.depoimento2.aprovado,
            'ds_depoimento': self.depoimento2.ds_depoimento
        }
        response = self.client.post(self.urlE, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        response = self.client.get(self.urlE)
        posts = Depoimento.objects.all()
        serializer = ExternalDepoimentoSerializer(posts, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def testPut(self):
        data = {
            'id_depoimento': self.depoimento2.id_depoimento,
            'ds_depoimento': 'Ainda é verdadeiro'
        }
        data_serializer = {
            'id_depoimento': self.depoimento2.id_depoimento,
            'ds_depoimento': 'Ainda é verdadeiro'
        }
        response = self.client.put(
            self.urlE + str(self.depoimento2.id_depoimento) + '/', data)
        serializer = ExternalDepoimentoSerializer(data_serializer)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testDelete(self):
        response = self.client.delete(
            self.urlE + str(self.depoimento2.id_depoimento) + '/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
