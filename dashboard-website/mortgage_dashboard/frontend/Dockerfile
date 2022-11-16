# FROM node:16.15.0-alpine
# WORKDIR /app/frontend
# COPY ./package.json ./
# COPY ./package-lock.json ./
# RUN npm install
# COPY . ./
# CMD npm run build

FROM node:16.15.0-alpine as build
# FROM node:13.12.0-alpine as build
WORKDIR /app/frontend
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build