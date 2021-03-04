from django.db import models


class Frases(models.Model):
    """
        Legenda:
            id: Identificador único;
            ds: Descrição

        Campos:
            id_frase: Identificador único da frase;
            ds_frase: Texto da frase;
    """
    id_frase = models.AutoField(primary_key=True)

    ds_frase = models.TextField(null=False,
                                blank=False)

    def __str__(self):
        return str(self.id_frase)
