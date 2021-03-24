import json
from django.http import HttpResponse
from .models import Questionario
from django.views.decorators.http import require_http_methods


@require_http_methods(["GET"])
def analisa_fluxos(request):
    # Iniciando as variáveis
    arquivo = open('questionario/entrada.json')
    entrada = json.load(arquivo)
    quests = Questionario.objects.all()
    resultado = []
    # Questão 1
    for quest in quests:
        # Já foi ameaçada?
        perg_in = entrada[0]
        perg_db = quest.arvore_decisao
        if perg_db['question'] == perg_in['question']:
            resp_in = perg_in['children'][0]
            resp_db = perg_db['children'][0]
            if resp_db['label'] == resp_in['label'] and resp_in['label'] == 'Sim':
                # Essa ameaça foi física?
                perg_in = resp_in
                perg_db = resp_db
                if perg_db['question'] == perg_in['question']:
                    resp_in = perg_in['children'][0]
                    resp_db = perg_db['children'][0]
                    if resp_db['label'] == resp_in['label'] and resp_in['label'] == 'Sim':
                        # Foi concretizada?
                        perg_in = resp_in
                        perg_db = resp_db
                        if perg_db['question'] == perg_in['question']:
                            resp_in = perg_in['children'][0]
                            resp_db = perg_db['children'][0]
                            if resp_db['label'] == resp_in['label'] and resp_in['label'] == 'Sim':
                                resultado.append(
                                    str(quest.categoria_violencia))
                                # Física
                            elif resp_db['label'] == resp_in['label'] and resp_in['label'] == 'Não':
                                resultado.append(
                                    str(quest.categoria_violencia))
                                # Psicológica
                    elif resp_db['label'] == resp_in['label'] and resp_in['label'] == 'Não':
                        # Essa ameaça envolve algum ato sobre seu corpo contra sua vontade?
                        perg_in = resp_in
                        perg_db = resp_db
                        if perg_db['question'] == perg_in['question']:
                            resp_in = perg_in['children'][0]
                            resp_db = perg_db['children'][0]
                            if resp_db['label'] == resp_in['label'] and resp_in['label'] == 'Sim':
                                # Foi concretizada?
                                perg_in = resp_in
                                perg_db = resp_db
                                if perg_db['question'] == perg_in['question']:
                                    resp_in = perg_in['children'][0]
                                    resp_db = perg_db['children'][0]
                                    if resp_db['label'] == resp_in['label'] and resp_in['label'] == 'Sim':
                                        resultado.append(
                                            str(quest.categoria_violencia))
                                        # Sexual
                                    elif resp_db['label'] == resp_in['label'] and resp_in['label'] == 'Não':
                                        resultado.append(
                                            str(quest.categoria_violencia))
                                        # Psicológica
    # Questão 2
    for quest in quests:
        # Alguém próximo a você se feriu de alguma forma?
        perg_in = entrada[1]
        perg_db = quest.arvore_decisao
        if perg_db['question'] == perg_in['question']:
            resp_in = perg_in['children'][0]
            resp_db = perg_db['children'][0]
            if resp_db['label'] == resp_in['label'] and resp_in['label'] == 'Sim':
                # Qual das opções abaixo se aproxima mais?
                perg_in = resp_in
                perg_db = resp_db
                if perg_db['question'] == perg_in['question']:
                    resp_in = perg_in['children'][0]
                    resp_db = perg_db['children'][0]
                    # Esse acontecimento é usado contra você como ameaça ou chantagem?
                    perg_in = resp_in
                    perg_db = resp_db
                    if perg_db['question'] == perg_in['question']:
                        resp_in = perg_in['children'][0]
                        resp_db = perg_db['children'][0]
                        if resp_db['label'] == resp_in['label'] and resp_in['label'] == 'Sim':
                            resultado.append(str(quest.categoria_violencia))
                            # Psicológica
    # Questão 3
    for quest in quests:
        # Já foi acusada indevidamente, por traição ou mentiras?
        perg_in = entrada[2]
        perg_db = quest.arvore_decisao
        if perg_db['question'] == perg_in['question']:
            resp_in = perg_in['children'][0]
            resp_db = perg_db['children'][0]
            if resp_db['label'] == resp_in['label'] and resp_in['label'] == 'Sim':
                # Isso lhe causou algum constrangimento como xingamentos,
                # humilhações e/ou exposições?
                perg_in = resp_in
                perg_db = resp_db
                if perg_db['question'] == perg_in['question']:
                    resp_in = perg_in['children'][0]
                    resp_db = perg_db['children'][0]
                    if resp_db['label'] == resp_in['label'] and resp_in['label'] == 'Sim':
                        # Esse acontecimento foi usado como justificativa para
                        # algum tipo de agressão física?
                        perg_in = resp_in
                        perg_db = resp_db
                        if perg_db['question'] == perg_in['question']:
                            resp_in = perg_in['children'][0]
                            resp_db = perg_db['children'][0]
                            if resp_in['label'] == 'Não' and len(perg_db['children']) > 1:
                                resp_db = perg_db['children'][1]
                            if resp_db['label'] == resp_in['label'] and resp_in['label'] == 'Sim':
                                resultado.append(
                                    str(quest.categoria_violencia))
                            elif resp_db['label'] == resp_in['label'] and resp_in['label'] == 'Não':
                                resultado.append(
                                    str(quest.categoria_violencia))
    # Mostrando resultado
    resultado = list(set(resultado))
    html = "<html><body>%s</body></html>" % resultado
    return HttpResponse(html)
