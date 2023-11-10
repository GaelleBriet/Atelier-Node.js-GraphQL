FROM node:lts-alpine3.18

ARG GRAPHQL_URI

ENV GRAPHQL_URI $GRAPHQL_URI

WORKDIR /app/vue

COPY ./vue/package.json ./

RUN npm install

COPY ./vue ./

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]