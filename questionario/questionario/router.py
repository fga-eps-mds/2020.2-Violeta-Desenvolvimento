from . import viewsets
from rest_framework import routers

router = routers.DefaultRouter()
router.register('cadastro-profissionais', viewsets.CadastroProfissionaisViewset)
router.register('contador', viewsets.SalvarDadosViewset)
router.register('categoria-violencia', viewsets.CategoriaViolenciaViewset)
router.register('contato-violencia', viewsets.ContatoViolenciaViewset)
router.register('questionario', viewsets.QuestionarioViewset)
router.register('contato-questionario', viewsets.ContatoQuestionarioViewset)
