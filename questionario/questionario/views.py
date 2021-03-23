from django.shortcuts import render
<<<<<<< HEAD
from django.db.models import F
from questionario.models import SalvarDados
# Create your views here.

def add_victims_category (request):
    if(request.method == 'POST'):
        violencia = request.POST["id"]
        contador = SalvarDados.objects.get(id = violencia)
        contador.id += 1
        contador.save()
=======
from django.http import *
from questionario.models import CategoriaViolencia
# Create your views here.

def add_victims_category (request):
    if resquest.method == "POST":    
        categoria = request.POST["id"]
        categorias = CategoriaViolencia.objects.get(id_categoria = categoria)
        categorias.vitimas_categoria =+ 1
        categorias.save()
>>>>>>> b213d889a92ea993a8ed175dda34dd362dc30d35
