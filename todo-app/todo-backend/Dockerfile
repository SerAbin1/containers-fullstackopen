FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

ENV DEBUG=todo-backend:*

USER node

EXPOSE 3000

CMD ["npm", "start"]
