from django.shortcuts import render
from django.http import *
from questionario.models import CategoriaViolencia
from rest_framework.decorators import *
from django.views.decorators.http import *
from django.contrib.auth.decorators import *
# Create your views here.

@require_http_methods(["POST"])
def add_victims_category (request):
    if  request.method == "POST":    
        categoria = request.POST["id_categoria"]
        categorias = CategoriaViolencia.objects.get(id_categoria = categoria)
        categorias.vitimas_categoria += 1
        categorias.save()