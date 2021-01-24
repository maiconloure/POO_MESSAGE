# REACT APP

## Dev
```sh
docker-compose up -d --build
```

## Produção
```sh
docker build -f Dockerfile-prod -t sample:prod .
docker run -it -p 8080:80 --rm sample:prod

docker-compose -f docker-compose-prod.yml up -d --build
```