from django.shortcuts import render
from django.http import *
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from questionario.models import CategoriaViolencia
from django.views.decorators.http import require_http_methods

# Create your views here.
@csrf_exempt
@require_http_methods(["POST"]) 
def add_victims_category (request):
   
    data = request.POST
    contador = CategoriaViolencia.objects.get(ds_categoria=data["categoria"])
    contador.vitimas_categoria += 1
    contador.save()
    url= JsonResponse({"classe": contador.ds_categoria,
                         "qtd": contador.vitimas_categoria})

    html = "<html><body>%s</body></html>" % url
    return HttpResponse(html)
