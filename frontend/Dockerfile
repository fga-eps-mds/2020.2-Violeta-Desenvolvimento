FROM node:alpine as builder
WORKDIR '/home/frontend/'
COPY package*.json ./
RUN npm install -g npm@7.6.1
RUN npm install --cache /tmp/
COPY . .
RUN chmod -R 777 *
RUN npm run build
