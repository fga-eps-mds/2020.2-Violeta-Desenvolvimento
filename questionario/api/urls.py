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
from questionario.router import router
from questionario import views

BASE_URL = os.environ['BASE_URL']

urlpatterns = [
    path(BASE_URL + 'admin/', admin.site.urls),
    path(BASE_URL + 'api/', include(router.urls)),
    path(BASE_URL + 'resultado/', views.analisa_fluxos),
    path(BASE_URL + 'vitimas/', views.add_victims_category)
]
