from rest_framework.permissions import BasePermission
import requests
import socket

URL = "http://{}:{}/"
PATH = "user/login/api/v0/validate/"


class ServiceAuthenticationDjango(BasePermission):
    """ Create new custom permission to use on application."""
    def has_object_permission(self, request, view, obj):
        token = {'token': request.token}
        host = socket.gethostbyname('authentication_django')
        port = '8090'
        url = URL.format(host, port)
        url += PATH
        response = request.post(url, data=token)
        if response.status_code < 300 and response.status_code >= 200:
            return True
        return False