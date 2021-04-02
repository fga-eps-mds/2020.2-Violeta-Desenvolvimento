from django.urls import path
from user_token.views import ObtainTokenPairView
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('login/', ObtainTokenPairView.as_view()),
    path('login/refresh/', TokenRefreshView.as_view()),
]