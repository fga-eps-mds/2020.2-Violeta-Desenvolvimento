FROM python:3.6-alpine
ENV PYTHONUNBUFFERED 1

RUN mkdir /questionario
WORKDIR /questionario

RUN apk add --no-cache --virtual .build-deps \
    ca-certificates gcc postgresql-dev linux-headers musl-dev \
    libffi-dev jpeg-dev zlib-dev

COPY requirements.txt /questionario/
RUN pip install -r requirements.txt
COPY . /questionario/
EXPOSE 80
