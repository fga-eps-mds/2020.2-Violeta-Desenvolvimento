from django.contrib import admin
from .models import (CadProfissionais, SalvarDados, CategoriaViolencia, ContatoViolencia, Questionario,
                     ContatoQuestionario)

admin.site.register(CadProfissionais)
#admin.site.register(CadastroProfissionais)
admin.site.register(SalvarDados)
admin.site.register(CategoriaViolencia)
admin.site.register(ContatoViolencia)
admin.site.register(Questionario)
admin.site.register(ContatoQuestionario)