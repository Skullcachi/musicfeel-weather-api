FROM node:latest
WORKDIR /app
COPY ./NodeApp/package.json /app
RUN npm install
ADD . /app
RUN node NodeApp/src/index.js
EXPOSE 3000
