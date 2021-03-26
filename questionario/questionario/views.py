from django.shortcuts import render
from django.http import HttpResponse
from questionario.models import CategoriaViolencia
# Create your views here.


def add_victims_category(request):
    if request.method == "POST":
        categoria = request.POST["id"]
        categorias = CategoriaViolencia.objects.get(id_categoria=categoria)
        categorias.vitimas_categoria += 1
        categorias.save()
