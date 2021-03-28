from django.shortcuts import render
from django.http import *
from questionario.models import CategoriaViolencia

# Create your views here.

def add_victims_category (request):
    
    html = "<html><body>Hello_Word</body></html>" 
    return HttpResponse(html)
    
    categoria = request.POST["fisica"]
    categorias = CategoriaViolencia.objects.get(nome_categoria = categoria)
    
    if request.method == "POST":    
        categorias.vitimas_categoria += 1
        categorias.save()

    html = "<html><body>%s</body></html>" % categorias.vitimas_categoria
    return HttpResponse(html)
