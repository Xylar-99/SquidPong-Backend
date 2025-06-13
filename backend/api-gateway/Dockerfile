FROM node:20

RUN apt-get update && apt-get install -y openssl libssl-dev vim

WORKDIR /gateway

RUN mkdir -p /gateway/src

COPY ./config/*.json .

RUN npm install

COPY ./src/ ./src/

RUN npm run build

EXPOSE 4000

CMD ["npm" , "run" , "start"]

