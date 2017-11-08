
FROM node:6.11.3

WORKDIR /app

RUN npm install -g http-server

COPY build /app

EXPOSE 1337

CMD ["http-server","-p","1337"]