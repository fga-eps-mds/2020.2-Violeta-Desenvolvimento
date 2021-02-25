FROM python:3.6-alpine
ENV PYTHONUNBUFFERED 1

RUN mkdir /depoimentos
WORKDIR /depoimentos

RUN apk add --no-cache --virtual .build-deps \
    ca-certificates gcc postgresql-dev linux-headers musl-dev \
    libffi-dev jpeg-dev zlib-dev

COPY requirements.txt /depoimentos/
RUN pip install -r requirements.txt
COPY . /depoimentos/
