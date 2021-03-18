FROM node:alpine as builder
WORKDIR '/home/frontend/'
COPY package*.json ./
RUN npm install -g npm@7.6.1
RUN npm install --cache /tmp/
COPY . .
RUN npm run build
RUN rm -r /home/frontend/node_modules/.cache
RUN chmod -R 777 *
