FROM node:carbon
WORKDIR /var/www/html/code
COPY ./code/package*.json ./

RUN npm install

COPY ./code ./

EXPOSE 8080

CMD [ "npm", "run", "server" ]