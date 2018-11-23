docker build . -t proxy
docker run -it --rm -p 80:80 --name=proxy --net=service proxy