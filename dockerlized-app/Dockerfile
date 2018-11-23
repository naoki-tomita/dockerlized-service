FROM alpine
RUN apk update
RUN apk add nginx
RUN mkdir /run/nginx
RUN mkdir -p /var/www/html
ADD dist/. /var/www/html
ADD nginx/. /etc/nginx/conf.d
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]