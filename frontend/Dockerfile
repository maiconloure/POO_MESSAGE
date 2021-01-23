FROM node:15-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN yarn install

RUN yarn global add react-scripts@3.3.1

COPY . .

CMD yarn start