import json
from django.http import HttpResponse
from .models import Questionario
from django.views.decorators.http import require_http_methods


@require_http_methods(["GET"])
def analisa_fluxos(request):
    arquivo = open('questionario/entrada.json')
    entrada = json.load(arquivo)
    quests = Questionario.objects.all()
    resultado = []
    for i in range(3):
        for quest in quests:
            ent = entrada[i]
            bda = quest.arvore_decisao
            dic_db = {}
            dic_in = {}
            while(bda['question'] is not None):
                dic_db[bda['question']] = bda['children'][0]['label']
                bda = bda['children'][0]
            while(ent['question'] is not None):
                dic_in[ent['question']] = ent['children'][0]['label']
                ent = ent['children'][0]
            if dic_db == dic_in:
                resultado.append(str(quest.categoria_violencia))
    resultado = list(set(resultado))
    html = "<html><body>%s</body></html>" % resultado
    return HttpResponse(html)
