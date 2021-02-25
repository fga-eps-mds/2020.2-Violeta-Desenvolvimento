FROM python:3.6-alpine
ENV PYTHONUNBUFFERED 1

RUN mkdir /frases
WORKDIR /frases

RUN apk add --no-cache --virtual .build-deps \
    ca-certificates gcc postgresql-dev linux-headers musl-dev \
    libffi-dev jpeg-dev zlib-dev

COPY requirements.txt /frases/
RUN pip install -r requirements.txt
COPY . /frases/
