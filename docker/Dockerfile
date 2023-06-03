FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production \
    && npm install -g nodemon ts-node \
    && npm cache clean --force

COPY . .

EXPOSE 5000

CMD ["sh", "./docker/start.sh"]