from rest_framework.permissions import BasePermission
import requests as rq
import socket

URL = "http://{}:{}/"
PATH = "login/validate/"


class ServiceAuthenticationDjango(BasePermission):
    """ Create new custom permission to use on application."""

    def has_object_permission(self, request, view, obj):
        token = {'token': request.token}
        host = socket.gethostbyname('authentication_django')
        port = '8004'
        url = URL.format(host, port)
        url += PATH
        response = rq.post(url, data=token)
        if response.status_code < 300 and response.status_code >= 200:
            return True
        return False
