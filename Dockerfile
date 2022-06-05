FROM node:16-alpine

WORKDIR /app

ADD package.json .
ADD yarn.lock .
RUN yarn install --pure-lockfile --non-interactive --production=false
ADD ormconfig.js .
ADD public public
ADD tsconfig.json .
ADD src src
RUN yarn build

EXPOSE 3000
CMD [ "node", "./lib/main.js" ]