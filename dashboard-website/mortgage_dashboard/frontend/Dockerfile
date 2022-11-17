FROM node:16.15.0-alpine as build
WORKDIR /frontend
COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./
RUN npm ci --silent
COPY ./frontend ./
RUN npm run build


FROM nginx:stable-alpine
COPY --from=build /frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]