from .viewsets import FrasesViewset
from rest_framework import routers


router = routers.DefaultRouter()
router.register('frases-motivacionais', FrasesViewset)
