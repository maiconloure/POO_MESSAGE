FROM node:12-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN yarn install
RUN yarn global add react-scripts@3.3.1

EXPOSE 3000

CMD yarn start
