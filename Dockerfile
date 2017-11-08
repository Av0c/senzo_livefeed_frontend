
FROM node:6.11.3-alpine

EXPOSE 5050

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD ["npm", "start"]