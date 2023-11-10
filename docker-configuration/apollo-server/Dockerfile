FROM node:lts-alpine3.18

WORKDIR /app/apollo-server

COPY ./apollo-server/package.json ./

RUN npm install

COPY ./apollo-server ./

CMD ["npm", "run", "dev", "--host", "0.0.0.0"]