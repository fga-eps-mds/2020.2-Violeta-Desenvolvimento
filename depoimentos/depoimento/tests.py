from rest_framework.test import APITestCase
from rest_framework import status
from .models import (Depoimento)
from .serializers import (DepoimentoSerializer, ExternalDepoimentoSerializer)


urlE = 'depoimentos/api/external-depoimento/'
url = 'depoimentos/api/depoimento/'


class DepoimentoTestCase(APITestCase):
    def setUp(self):
        self.depoimento1 = Depoimento.objects.create(
            aprovado=False, ds_depoimento='Este depoimento é falso')

    def testPost(self):
        data = {
            'aprovado': self.depoimento1.aprovado,
            'ds_depoimento': self.depoimento1.ds_depoimento
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        response = self.client.get(url)
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
        urlId1 = url + str(self.depoimento1.id_depoimento) + '/'
        response = self.client.put(urlId1, data)
        serializer = DepoimentoSerializer(data_serializer)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testDelete(self):
        urlId2 = url + str(self.depoimento1.id_depoimento) + '/'
        response = self.client.delete(urlId2)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)


class ExternalDepoimentoTestCase(APITestCase):
    def setUp(self):
        self.depoimento2 = Depoimento.objects.create(
            aprovado=True, ds_depoimento='Este depoimento é verdadeiro')

    def testPost(self):
        data = {
            'aprovado': self.depoimento2.aprovado,
            'ds_depoimento': self.depoimento2.ds_depoimento
        }
        response = self.client.post(urlE, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        response = self.client.get(urlE)
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
        urlId1 = urlE + str(self.depoimento2.id_depoimento) + '/'
        response = self.client.put(urlId1, data)
        serializer = ExternalDepoimentoSerializer(data_serializer)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testDelete(self):
        urlId2 = urlE + str(self.depoimento2.id_depoimento) + '/'
        response = self.client.delete(urlId2)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
