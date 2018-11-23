FROM alpine:latest
RUN apk add --no-cache nginx
RUN mkdir -p /run/nginx
ADD nginx/. /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]