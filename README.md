# Projeto Violeta
Homolog: [https://rotten-sheep-93.loca.lt/](https://rotten-sheep-93.loca.lt/)

Prod: [http://f67ysdm2s22yrtgfmnetoufnuz7jrfvblbconyhn2ht4c6fnnudq.remote.moe/](http://f67ysdm2s22yrtgfmnetoufnuz7jrfvblbconyhn2ht4c6fnnudq.remote.moe/)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_Violeta-Desenvolvimento&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_Violeta-Desenvolvimento)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_Violeta-Desenvolvimento&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_Violeta-Desenvolvimento)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_Violeta-Desenvolvimento&metric=security_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_Violeta-Desenvolvimento)

### Produção
[![Build Status](https://b289a42c5af7.ngrok.io/buildStatus/icon?job=violeta)](https://b289a42c5af7.ngrok.io/job/violeta/)

## Homologação
[![Build Status](https://b289a42c5af7.ngrok.io/buildStatus/icon?job=violeta-dev)](https://b289a42c5af7.ngrok.io/job/violeta-dev/)

## Requisitos
1. Ter instalado o [docker](https://docs.docker.com/get-docker/) e o [docker-compose](https://docs.docker.com/compose/install/) nas máquinas.

## Para executar o projeto
1. Para executar o projeto na raiz do repositório execute `docker-compose up`
se for a primeira vez que roda o projeto execute `docker-compose up --build`;
2. Aguarde todos os passos se concluirem bem como as instalações serem feitas;
3. Após a messagem de server running aparacer na tela você já pode acessar os seguintes endereços:
      * backend: 
          *  [questionario](http://localhost:8001/)
          *  [frases](http://localhost:8002/)
          *  [depoimentos](http://localhost:8003/)
          *  [autenticador](http://localhost:8004/)
      * frontend: [frontend](http://localhost:3000/)
4. Caso julgue necessário entrar nos sistemas para algum tipo de manipulação basta executar `docker-compose exec [api|frontend|db] ash`;

## Parando projeto
Para parar o projeto basta apertar "ctrl + c" e executar o comando `docker-compose down`;

## Observação
Lembre de sempre subir os serviços antes de tentar utiliza-los

## Carregar dados do banco
Para carregar os dados do questionário, utilize o comando `docker-compose exec questionario python manage.py loaddata db.json`;

Caso seja necessário exportar dados questionário para um arquivo json, execute o comando `docker-compose exec questionario python manage.py dumpdata > db.json`
