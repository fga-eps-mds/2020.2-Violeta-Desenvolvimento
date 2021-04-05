from rest_framework.test import APITestCase
from rest_framework import status
from user_token.serializers import (UserSerializer)
from django.contrib.auth import get_user_model

UserModel = get_user_model()

url = '/autenticador/'


class UserTestCase(APITestCase):
    def setUp(self):
        self.user = UserModel.objects.create_user(
            username=['username'],
            password=['password'],
        )
        self.user.username = 'usernameTest'
        self.user.password = 'passwordTest'

    def testPost(self):
        data = {
            'username': self.user.username,
            'password': self.user.password
        }
        response = self.client.post(url+'account/register', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def testGet(self):
        response = self.client.get(url+'account/register')
        self.assertEqual(response.status_code,
                         status.HTTP_405_METHOD_NOT_ALLOWED)

    def testLoginDenied(self):
        data = {
            'username': self.user.username,
            'password': 'passwordTestt'
        }
        response = self.client.post(url+'login/', data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
