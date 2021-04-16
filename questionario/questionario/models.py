from django.db import models
from django.contrib.postgres.fields import JSONField


class CadProfissionais(models.Model):
    nome_profissional = models.CharField(max_length=30)
    ds_profissional = models.TextField(null=False, blank=False)
    id_profissional = models.AutoField(primary_key=True)

    def __str__(self):
        return self.nome_profissional


class ViolenciasCount(models.Model):
    id_contador = models.AutoField(primary_key=True)
    ds_categoria = models.TextField(null=False,
                                    blank=False)

    categoria_counter = models.IntegerField(default=0)

    def __str__(self):
        return str(self.ds_categoria) + " | " + str(self.categoria_counter)


class CategoriaViolencia(models.Model):
    """
        Legenda:
            id: Identidicador único;
            ds: Descrição
        Campos:
            id_categoria: Identificador único da categoria;
            nome_categoria: Nome da categoria;
            ds_categoria: Descrição da categoria;
    """
    id_categoria = models.AutoField(primary_key=True)

    nome_categoria = models.CharField(max_length=200,
                                      null=False,
                                      blank=False)

    ds_categoria = models.TextField(null=False,
                                    blank=False)

    def __str__(self):
        return self.ds_categoria + " | " + str(self.vitimas_categoria)


class CategoriaContato(models.Model):
    """
        Legenda:
            id: Identidicador único;
            ds: Descrição;
        Campos:
            id_categoria: Identidicador único de categoria;
            nome_categoria: Nome da categoria;
    """
    id_categoria = models.AutoField(primary_key=True)

    nome_categoria = models.CharField(max_length=15,
                                      null=False,
                                      blank=False)
    def __str__(self):
        return self.nome_categoria + " | " + str(self.id_categoria)


class ContatoViolencia(models.Model):
    """
        Legenda:
            id: Identidicador único;
            ds_contato: Descrição;
            nome_contato: Nome
            categoria: Categoria
        Campos:
            id_contato: Identidicador único contato;
            nome_contato: Nome do contato;
            ds_contato: Descrição do contato;
            categoria: Tipo de contato (Ong, Psicólogos órgãos competentes)
    """
    id_contato = models.AutoField(primary_key=True)

    nome_contato = models.CharField(max_length=200,
                                    null=False,
                                    blank=False)

    numero_contato = models.CharField(max_length=50,
                                      null=False,
                                      blank=False)

    ds_contato = models.TextField(null=False,
                                  blank=False)

    categoria_fk = models.ForeignKey(CategoriaContato,
                                     on_delete=models.CASCADE)

    def __str__(self):
        return self.nome_contato + " | " + str(self.categoria_fk)


class Questionario(models.Model):
    """
        Legenda:
            id: Identidicador único;
            ds: Descrição;
        Campos:
            id_questionario: Identidicador único questionario;
            categoria_violencia: Categoria da violencia;
            arvore_decisao: JSON com a arvore de decisão do questionário;
    """

    id_questionario = models.AutoField(primary_key=True)

    categoria_violencia = models.ForeignKey(CategoriaViolencia,
                                            on_delete=models.CASCADE)

    arvore_decisao = JSONField(null=False,
                               blank=False)

    def __str__(self):
        return str(self.id_questionario) + " | " + str(
            self.categoria_violencia)


class ContatoQuestionario(models.Model):
    """
        Lengenda:
            fk: ForeignKey;
        Campos:
            contato_fk: Contato das organizações;
            questionario_fk: Questionário relacionado;
    """
    contato_fk = models.ForeignKey(ContatoViolencia,
                                   on_delete=models.CASCADE)

    questionario_fk = models.ForeignKey(Questionario,
                                        on_delete=models.CASCADE)

    def __str__(self):
        return str(self.contato_fk) + " | " + str(self.questionario_fk)
