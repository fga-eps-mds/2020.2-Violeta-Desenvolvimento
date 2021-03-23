from django.shortcuts import render
from django.db.models import F
from questionario.models import SalvarDados
# Create your views here.

def add_victims_category (request):
    if(request.method == 'POST'):
        violencia = request.POST["id"]
        contador = SalvarDados.objects.get(id = violencia)
        contador.id += 1
        contador.save()
