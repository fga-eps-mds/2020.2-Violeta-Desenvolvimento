from . import viewsets
from rest_framework import routers


router = routers.DefaultRouter()
router.register('vitimas-categoria', viewsets.ViolenciasCountViewset)
router.register('cadastrar-profissionais', viewsets.CadProfissionaisViewset)
router.register('categoria-violencia', viewsets.CategoriaViolenciaViewset)
router.register('categoria-contato', viewsets.CategoriaContatoViewset)
router.register('contato-violencia', viewsets.ContatoViolenciaViewset)

router.register('questionario', viewsets.QuestionarioViewset)
router.register('contato-questionario', viewsets.ContatoQuestionarioViewset)
