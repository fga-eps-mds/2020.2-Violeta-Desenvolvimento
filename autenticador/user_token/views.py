from rest_framework import permissions
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import get_user_model
from user_token.serializers import UserSerializer, TokenObtainPairSerializer
from user_token.permissions import ServiceAuthenticationDjango

class CreateUserView(CreateAPIView):
    model = get_user_model()
    permission_classes = [IsAdminUser | ServiceAuthenticationDjango]
    serializer_class = UserSerializer

class ObtainTokenPairView(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializer