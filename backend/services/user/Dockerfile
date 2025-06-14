FROM node:20

RUN apt-get update && apt-get install -y openssl libssl-dev vim

WORKDIR /user

RUN mkdir -p /user/src

COPY ./*.json .

RUN npm install

COPY ./prisma ./prisma

RUN npx prisma generate

COPY ./src/ ./src/

RUN npm run build

EXPOSE 4001

CMD ["npm" , "run" , "start"]

