FROM node:13.12.0-alpine
WORKDIR /app/frontend

COPY package.json package-lock.json ./
RUN npm install webpack webpack-cli @babel/core babel-loader @babel/preset-env @babel/preset-react react react-dom --save-dev
#RUN npm install webpack webpack-cli --save-dev
#RUN npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
#RUN npm install react react-dom --save-dev
RUN npm install bootstrap @babel/plugin-proposal-class-properties react-router-dom
# RUN npm install @babel/plugin-proposal-class-properties
# RUN npm install react-router-dom
COPY . ./
EXPOSE 3000
