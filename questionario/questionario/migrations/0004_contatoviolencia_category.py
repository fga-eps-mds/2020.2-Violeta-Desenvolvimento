# Generated by Django 2.1.7 on 2021-03-31 21:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questionario', '0003_cadprofissionais'),
    ]

    operations = [
        migrations.AddField(
            model_name='contatoviolencia',
            name='category',
            field=models.TextField(default='Ongs'),
        ),
    ]