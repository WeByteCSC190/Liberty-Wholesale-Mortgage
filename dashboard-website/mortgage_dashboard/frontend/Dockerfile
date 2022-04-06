FROM node
COPY . /code
WORKDIR /code
RUN npm i
RUN npm run build
RUN npm install -g serve
CMD serve -s build -p 3000