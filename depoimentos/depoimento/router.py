from . import viewsets
from rest_framework import routers

router = routers.DefaultRouter()
router.register('depoimento',  viewsets.DepoimentoViewset, 'depoimento')
router.register(
    'external-depoimento',
    viewsets.ExternalDepoimentoViewset,
    'externalDepoimento')
