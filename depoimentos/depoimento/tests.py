import json
from rest_framework.test import APITestCase
from rest_framework import status
from .models import (Depoimento)
from .serializers import (DepoimentoSerializer)


class DepoimentoTestCase(APITestCase):
    def setUp(self):
        self.depoimento1 = Depoimento.objects.create(
            aprovado=False, ds_depoimento='Este depoimento é falso')

    def testPost(self):
        data = {
            'aprovado': self.depoimento1.aprovado,
            'ds_depoimento': self.depoimento1.ds_depoimento
        }
        response = self.client.post('/api/depoimento/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        response = self.client.get('/api/depoimento/')
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
        url = '/api/depoimento/' + str(self.depoimento1.id_depoimento) + '/'
        response = self.client.put(url, data)
        serializer = DepoimentoSerializer(data_serializer)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testDelete(self):
        url = '/api/depoimento/' + str(self.depoimento1.id_depoimento) + '/'
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
