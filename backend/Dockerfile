# backend/Dockerfile
FROM node:18
#Docker File para Back
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4000
CMD ["node", "server.js"]
