FROM node:20 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM httpd:alpine
COPY --from=builder /app/build /usr/local/apache2/htdocs