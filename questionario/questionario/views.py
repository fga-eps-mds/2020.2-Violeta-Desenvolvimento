import json
import io
from django.http import FileResponse
from django.http import HttpResponse
from django.http import JsonResponse
from .models import Questionario, ViolenciasCount
from django.views.decorators.http import require_http_methods


@require_http_methods(["POST"])
def analisa_fluxos(request):
    arquivo = open('questionario/entrada.json')
    entrada = json.load(arquivo)
    quests = Questionario.objects.all()
    resultado = []
    for i in range(4):
        for quest in quests:
            ent = entrada[i]
            bda = quest.arvore_decisao
            dic_db = {}
            dic_in = {}
            while bda['question'] is not None:
                dic_db[bda['question'].lower(
                )] = bda['children'][0]['label'].lower()
                bda = bda['children'][0]
            while ent['question'] is not None:
                dic_in[ent['question'].lower(
                )] = ent['children'][0]['label'].lower()
                ent = ent['children'][0]
            if dic_db == dic_in:
                resultado.append(str(quest.categoria_violencia))
    resultado = list(set(resultado))
    html = "<html><body>%s</body></html>" % resultado
    return HttpResponse(html)


@require_http_methods(["POST"])
def add_victims_category(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    counter = ViolenciasCount.objects.get(ds_categoria=body["categoria"])
    counter.categoria_counter += 1
    counter.save()
    return JsonResponse({"class": counter.ds_categoria,
                        "counts": counter.categoria_counter})


@require_http_methods(["GET"])
def get_questionario(request):
    question = Questionario.objects.all()
    # print(question[0].arvore_decisao)
    # f = io.BytesIO(bytes(json.dumps(question[0].arvore_decisao), 'utf-8'))
    print(question[0].arvore_decisao)
    return HttpResponse(json.dumps(json.loads(question[0].arvore_decisao)))