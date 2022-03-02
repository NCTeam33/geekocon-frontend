#STAGE 1
FROM node:16.14-alpine as build
WORKDIR /src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

#STAGE 2
FROM nginx:1.17.1-alpine
COPY nginx.conf geekocon-frontend/nginx.conf
COPY --from=build /src/app/dist/geekocon-frontend usr/share/nginx/html
