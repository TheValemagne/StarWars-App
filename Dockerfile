FROM nginx:1.17.1-alpine
COPY /dist/design /usr/share/nginx/html
