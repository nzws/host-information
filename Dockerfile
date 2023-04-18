FROM node:18-slim

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]
