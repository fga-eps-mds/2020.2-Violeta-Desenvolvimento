# EPS-2020-2-G5-Desenvolvimento

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
