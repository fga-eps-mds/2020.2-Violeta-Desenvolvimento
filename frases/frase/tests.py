import os
from rest_framework.test import APITestCase
from rest_framework import status
from .models import Frases
from .serializers import FrasesSerializer

BASE_URL = os.environ['BASE_URL']


class FrasesTestCase(APITestCase):

    frasesUrl = '/frases/api/frases-motivacionais/'

    def setUp(self):
        self.frase1 = Frases.objects.create(ds_frase='TESTE')

    def testPost(self):
        data = {
            'ds_frase': 'DS TESTE'
        }
        response = self.client.post(
            self.frasesUrl, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        # get API response
        response = self.client.get(self.frasesUrl)
        # get data from DB
        posts = Frases.objects.all()
        # convert it to JSON
        serializer = FrasesSerializer(posts, many=True)
        # check the status
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def testPut(self):
        data = {'id_frase': self.frase1.id_frase,
                'ds_frase': 'DS MODIFICADO'
                }
        endereco = self.frasesUrl + \
            str(self.frase1.id_frase) + '/'
        response = self.client.put(endereco, data)
        serializer = FrasesSerializer(data)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testDelete(self):
        response = self.client.delete(
            self.frasesUrl + str(
                self.frase1.id_frase) + '/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
