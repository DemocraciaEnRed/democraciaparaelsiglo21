FROM nginx
MAINTAINER aaraujo@protonmail.ch

COPY site /usr/share/nginx/html
COPY book /usr/share/nginx/html/book
