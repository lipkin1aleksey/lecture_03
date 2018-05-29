**SIMPLE Docker image with node.js, webpack**

`собрать докер`
````
docker build -t test-app .
````
`развернуть докер`
````
docker run -p 30000:8080 -d test-app
````
Если по localhost:30000 видим стартовую страницу - всё хорошо.
