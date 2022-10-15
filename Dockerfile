FROM node:alpine

WORKDIR "/app"

RUN npm install

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
