docker build . -t app
docker run -it --rm -p 8081:80 --name=app --net=service app