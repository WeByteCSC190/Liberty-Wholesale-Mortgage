FROM node:16.15.0-alpine
WORKDIR /app/frontend
# COPY ./package.json ./
# COPY ./package-lock.json ./
# RUN npm ci --silent
COPY . ./
RUN npm install -g npm@latest
RUN rm -rf node_modules
RUN rm package-lock.json
RUN npm install
RUN npm install --save react@latest
CMD npm run build