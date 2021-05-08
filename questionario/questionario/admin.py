from django.contrib import admin
from .models import (
    ViolenciasCount,
    CategoriaViolencia,
    ContatoViolencia,
    Questionario,
    ContatoQuestionario)

admin.site.register(ViolenciasCount)
admin.site.register(CategoriaViolencia)
admin.site.register(ContatoViolencia)
admin.site.register(Questionario)
admin.site.register(ContatoQuestionario)
