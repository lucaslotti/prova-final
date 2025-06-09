# frontend/Dockerfile
FROM node:18
#Docker File para Front
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
