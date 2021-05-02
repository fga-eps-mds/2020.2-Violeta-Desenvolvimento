from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAdminUser
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import get_user_model
from user_token.serializers import UserSerializer, TokenObtainPairSerializer
from user_token.permissions import ServiceAuthenticationDjango
from drf_yasg.utils import swagger_auto_schema


class CreateUserView(CreateAPIView):
    model = get_user_model()
    permission_classes = [IsAdminUser | ServiceAuthenticationDjango]
    serializer_class = UserSerializer

    @swagger_auto_schema(
        request_body=UserSerializer,
        response={200: UserSerializer},
        operation_description="Lista detalhada de todos os depoimentos")
    def perform_create(self, serializer):
        serializer.save()


class ObtainTokenPairView(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializer

    @swagger_auto_schema(
        request_body=TokenObtainPairSerializer,
        response={200: TokenObtainPairSerializer},
        operation_description="Lista detalhada de todos os depoimentos")
    def perform_create(self, serializer):
        serializer.save()
