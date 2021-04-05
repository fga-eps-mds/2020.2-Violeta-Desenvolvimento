import json
from rest_framework.test import APITestCase
from rest_framework import status
from .models import (CadProfissionais, CategoriaViolencia, ContatoViolencia,
                     Questionario, ContatoQuestionario)
from .serializers import (
    CadProfissionaisSerializer,
    CategoriaViolenciaSerializer,
    ContatoViolenciaSerializer,
    QuestionarioSerializer,
    ContatoQuestionarioSerializer)


class CadProfissionaisTestCase(APITestCase):

    str_url = '/questionario/api/cadastrar-profissionais/'

    def setUp(self):
        self.cat1 = CadProfissionais.objects.create(
            nome_profissional='TESTE', ds_profissional='TESTE')

    def testPost(self):
        data = {
            'nome_profissional': 'NOME TESTE',
            'ds_profissional': 'DS TESTE'
        }
        response = self.client.post(self.str_url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        # get API response
        response = self.client.get(self.str_url)
        # get data from DB
        posts = CadProfissionais.objects.all()
        # convert it to JSON
        serializer = CadProfissionaisSerializer(posts, many=True)
        # check the status
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def testPut(self):
        data = {
            'id_profissional': self.cat1.id_profissional,
            'nome_profissional': 'NOME MODIFICADO',
            'ds_profissional': 'DS MODIFICADO'

        }
        endereco = self.str_url + \
            str(self.cat1.id_profissional) + '/'
        response = self.client.put(endereco, data)
        serializer = CadProfissionaisSerializer(data)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testDelete(self):
        response = self.client.delete(
            self.str_url + str(self.cat1.id_profissional) + '/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)


class CategoriaViolenciaTestCase(APITestCase):
    def setUp(self):
        self.cat1 = CategoriaViolencia.objects.create(
            nome_categoria='TESTE', ds_categoria='TESTE')

    def testPost(self):
        data = {
            'nome_categoria': 'NOME TESTE',
            'ds_categoria': 'DS TESTE'
        }
        response = self.client.post(
            '/questionario/api/categoria-violencia/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        # get API response
        response = self.client.get('/questionario/api/categoria-violencia/')
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
        endereco = '/questionario/api/categoria-violencia/' + \
            str(self.cat1.id_categoria) + '/'
        response = self.client.put(endereco, data)
        serializer = CategoriaViolenciaSerializer(data)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testDelete(self):
        response = self.client.delete(
            '/questionario/api/categoria-violencia/' + str(
                self.cat1.id_categoria) + '/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)


class ContatoViolenciaTestCase(APITestCase):
    def setUp(self):
        self.cont1 = ContatoViolencia.objects.create(
            nome_contato='TESTE', numero_contato='00000', ds_contato='TESTE')

    def testPost(self):
        data = {
            'nome_contato': 'NOME TESTE',
            'numero_contato': '00000',
            'ds_contato': 'DS TESTE'
        }
        response = self.client.post(
            '/questionario/api/contato-violencia/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        response = self.client.get('/questionario/api/contato-violencia/')
        posts = ContatoViolencia.objects.all()
        serializer = ContatoViolenciaSerializer(posts, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def testPut(self):
        data = {
            'id_contato': self.cont1.id_contato,
            'nome_contato': 'NOME MODIFICADO',
            'numero_contato': '11111',
            'ds_contato': 'DS MODIFICADO'
        }
        endereco = '/questionario/api/contato-violencia/' + \
            str(self.cont1.id_contato) + '/'
        response = self.client.put(endereco, data)
        serializer = ContatoViolenciaSerializer(data)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testDelete(self):
        response = self.client.delete(
            '/questionario/api/contato-violencia/' + str(
                self.cont1.id_contato) + '/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)


class QuestionarioTestCase(APITestCase):
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
        response = self.client.post('/questionario/api/questionario/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        response = self.client.get('/questionario/api/questionario/')
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
        endereco = '/questionario/api/questionario/' + \
            str(self.quest1.id_questionario) + '/'
        response = self.client.put(endereco, data)
        serializer = QuestionarioSerializer(data_serializer)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testDelete(self):
        response = self.client.delete(
            '/questionario/api/questionario/' + str(
                self.quest1.id_questionario) + '/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)


class ContatoQuestionarioTestCase(APITestCase):
    def setUp(self):
        self.contv1 = ContatoViolencia.objects.create(
            nome_contato='TESTE', numero_contato='00000', ds_contato='TESTE')
        self.cat1 = CategoriaViolencia.objects.create(
            nome_categoria='TESTE', ds_categoria='TESTE')
        self.quest1 = Questionario.objects.create(
            categoria_violencia=self.cat1, arvore_decisao=json.dumps('teste'))
        self.contq1 = ContatoQuestionario.objects.create(
            contato_fk=self.contv1, questionario_fk=self.quest1)

    def testPost(self):
        data = {
            'contato_fk': self.contv1.id_contato,
            'questionario_fk': self.quest1.id_questionario
        }
        response = self.client.post(
            '/questionario/api/contato-questionario/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        response = self.client.get('/questionario/api/contato-questionario/')
        posts = ContatoQuestionario.objects.all()
        serializer = ContatoQuestionarioSerializer(posts, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def testDelete(self):
        response = self.client.delete(
            '/questionario/api/contato-questionario/' + str(
                self.contq1.pk) + '/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def testPut(self):
        data = {
            'id': self.contq1.pk,
            'contato_fk': self.contv1.id_contato,
            'questionario_fk': self.quest1.id_questionario
        }
        data_serializer = {
            'id': self.contq1.pk,
            'contato_fk': self.contv1,
            'questionario_fk': self.quest1
        }
        endereco = '/questionario/api/contato-questionario/' + \
            str(self.contq1.pk) + '/'
        response = self.client.put(endereco, data)
        serializer = ContatoQuestionarioSerializer(data_serializer)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
