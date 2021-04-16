import os
import json
from rest_framework.test import APITestCase
from rest_framework import status
from .models import (CadProfissionais, CategoriaViolencia, ContatoViolencia,
                     Questionario, ContatoQuestionario, CategoriaContato)
from .serializers import (
    CadProfissionaisSerializer,
    CategoriaViolenciaSerializer,
    ContatoViolenciaSerializer,
    QuestionarioSerializer,
    ContatoQuestionarioSerializer,
    CategoriaContatoSerializer,)

BASE_URL = os.environ['BASE_URL']


class CategoriaViolenciaTestCase(APITestCase):

    catViolenciaUrl = '/questionario/api/categoria-violencia/'

    def setUp(self):
        self.cat1 = CategoriaViolencia.objects.create(
            nome_categoria='TESTE', ds_categoria='TESTE')

    def testPost(self):
        data = {
            'nome_categoria': 'NOME TESTE',
            'ds_categoria': 'DS TESTE'
        }
        response = self.client.post(
            self.catViolenciaUrl, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        # get API response
        response = self.client.get(self.catViolenciaUrl)
        # get data from DB
        posts = CategoriaViolencia.objects.all()
        # convert it to JSON
        serializer = CategoriaViolenciaSerializer(posts, many=True)
        # check the status
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def testPut(self):
        data = {
            'id_categoria': self.cat1.id_categoria,
            'nome_categoria': 'NOME MODIFICADO',
            'ds_categoria': 'DS MODIFICADO'
        }
        endereco = self.catViolenciaUrl + \
            str(self.cat1.id_categoria) + '/'
        response = self.client.put(endereco, data)
        serializer = CategoriaViolenciaSerializer(data)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testDelete(self):
        response = self.client.delete(
            self.catViolenciaUrl + str(
                self.cat1.id_categoria) + '/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)


class CategoriaViolenciaTestCase(APITestCase):

    catViolenciaUrl = '/questionario/api/categoria-violencia/'

    def setUp(self):
        self.cat1 = CategoriaViolencia.objects.create(
            nome_categoria='TESTE', ds_categoria='TESTE')

    def testPost(self):
        data = {
            'nome_categoria': 'NOME TESTE',
            'ds_categoria': 'DS TESTE'
        }
        response = self.client.post(
            self.catViolenciaUrl, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        # get API response
        response = self.client.get(self.catViolenciaUrl)
        # get data from DB
        posts = CategoriaViolencia.objects.all()
        # convert it to JSON
        serializer = CategoriaViolenciaSerializer(posts, many=True)
        # check the status
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def testPut(self):
        data = {
            'id_categoria': self.cat1.id_categoria,
            'nome_categoria': 'NOME MODIFICADO',
            'ds_categoria': 'DS MODIFICADO'
        }
        endereco = self.catViolenciaUrl + \
            str(self.cat1.id_categoria) + '/'
        response = self.client.put(endereco, data)
        serializer = CategoriaViolenciaSerializer(data)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testDelete(self):
        response = self.client.delete(
            self.catViolenciaUrl + str(
                self.cat1.id_categoria) + '/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)


class CategoriaContatoTestCase(APITestCase):

    str_url = '/questionario/api/categoria-contato/'

    def setUp(self):
        self.catC = CategoriaContato.objects.create(
            nome_categoria='TESTE')

    def testPost(self):
        data = {
            'nome_categoria': 'NOME TESTE',
        }
        response = self.client.post(self.str_url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        # get API response
        response = self.client.get(self.str_url)
        # get data from DB
        posts = CategoriaContato.objects.all()
        # convert it to JSON
        serializer = CategoriaContatoSerializer(posts, many=True)
        # check the status
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def testPut(self):
        data = {
            'id_categoria': self.catC.id_categoria,
            'nome_categoria': 'CAT MODIFICADA'
        }
        endereco = self.str_url + \
            str(self.catC.id_categoria) + '/'
        response = self.client.put(endereco, data)
        serializer = CategoriaContatoSerializer(data)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testDelete(self):
        response = self.client.delete(
            self.str_url + str(self.catC.id_categoria) + '/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)


class ContatoViolenciaTestCase(APITestCase):

    contatoViolenciaUrl = '/questionario/api/contato-violencia/'

    def setUp(self):
        self.catC = CategoriaContato.objects.create(
            nome_categoria='TESTE')
        self.cont1 = ContatoViolencia.objects.create(
            nome_contato='TESTE', numero_contato='00000',
            ds_contato='TESTE', categoria_fk=self.catC)

    def testPost(self):
        data = {
            'nome_contato': 'NOME TESTE',
            'numero_contato': '00000',
            'ds_contato': 'DS TESTE',
            'categoria_fk': self.catC.id_categoria,
        }
        response = self.client.post(
            self.contatoViolenciaUrl, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        response = self.client.get(self.contatoViolenciaUrl)
        posts = ContatoViolencia.objects.all()
        serializer = ContatoViolenciaSerializer(posts, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def testDelete(self):
        response = self.client.delete(
            self.contatoViolenciaUrl + str(
                self.cont1.id_contato) + '/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)


class QuestionarioTestCase(APITestCase):

    questionarioUrl = '/questionario/api/questionario/'

    def setUp(self):
        self.cat1 = CategoriaViolencia.objects.create(
            nome_categoria='TESTE', ds_categoria='TESTE')
        self.cat2 = CategoriaViolencia.objects.create(
            nome_categoria='TESTE2', ds_categoria='TESTE2')
        self.quest1 = Questionario.objects.create(
            categoria_violencia=self.cat1, arvore_decisao=json.dumps('teste'))

    def testPost(self):
        data = {
            'categoria_violencia': self.cat1.id_categoria,
            'arvore_decisao': json.dumps('teste')
        }
        response = self.client.post(self.questionarioUrl, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        response = self.client.get(self.questionarioUrl)
        posts = Questionario.objects.all()
        serializer = QuestionarioSerializer(posts, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def testPut(self):
        data = {
            'id_questionario': self.quest1.id_questionario,
            'categoria_violencia': self.cat1.id_categoria,
            'arvore_decisao': json.dumps('teste2')
        }
        data_serializer = {
            'id_questionario': self.quest1.id_questionario,
            'categoria_violencia': self.cat1,
            'arvore_decisao': 'teste2'
        }
        endereco = self.questionarioUrl + \
            str(self.quest1.id_questionario) + '/'
        response = self.client.put(endereco, data)
        serializer = QuestionarioSerializer(data_serializer)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testDelete(self):
        response = self.client.delete(
            self.questionarioUrl + str(
                self.quest1.id_questionario) + '/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
