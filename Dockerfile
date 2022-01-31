#STAGE 1
FROM node:12.7-alpine as build
WORKDIR /src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
