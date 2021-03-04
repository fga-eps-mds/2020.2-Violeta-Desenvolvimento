from django.db import models


class Depoimento(models.Model):
    """
        Legenda:
            id: Identificador único;
            ds: Descrição;
        ---
        Campos:
            id_depoimento: Campo para identificar depoimento;
            aprovado: flag que indicar se o depoimento foi aprovado ou não;
            ds_depoimento: Descrição do depoimento em si;
    """
    id_depoimento = models.AutoField(primary_key=True)

    aprovado = models.BooleanField(default=False,
                                   null=False,
                                   blank=False)

    ds_depoimento = models.TextField(null=False,
                                     blank=False)

    def __str__(self):
        return str(self.id_depoimento)
