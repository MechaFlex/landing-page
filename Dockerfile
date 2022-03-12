FROM httpd:2.4-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

COPY ./build/ /usr/local/apache2/htdocs/