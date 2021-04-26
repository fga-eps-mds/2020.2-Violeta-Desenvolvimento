"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import os
from django.contrib import admin
from django.urls import path, include
from depoimento.router import router
from rest_framework.permissions import AllowAny
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Violeta-Depoimentos API",
        default_version='v0',
        description="Violeta-Depoimentos  - This API contains the endpoints \
            for all depoimentos.",
    ),
    public=True,
    permission_classes=(AllowAny,),
)

BASE_URL = os.environ['BASE_URL']
urlpatterns = [
    path(BASE_URL + 'admin/', admin.site.urls),
    path(BASE_URL + 'api/', include(router.urls)),
    path(BASE_URL + '', schema_view.with_ui('swagger', cache_timeout=0)),
    path(BASE_URL + 'redoc/', schema_view.with_ui('redoc', cache_timeout=0)),
]
