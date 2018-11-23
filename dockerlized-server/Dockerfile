FROM alpine:latest
RUN mkdir -p /app/server
WORKDIR /app/server
ADD index.js .
ADD package.json .
ADD yarn.lock .
RUN apk update && \
    apk add --no-cache nodejs && \
    apk add --no-cache npm && \
    npm i -g yarn && \
    yarn && \
    yarn cache clean && \
    npm -g uninstall yarn && \
    apk del npm
CMD ["node", "./index.js"]
