docker build . -t server
docker run -it --rm -p 8080:80 --name=server --net=service server