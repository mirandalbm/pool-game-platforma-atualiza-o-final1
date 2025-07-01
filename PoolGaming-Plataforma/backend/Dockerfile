# Dockerfile para o backend Node.js
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
EXPOSE 4000
CMD ["npm", "run", "start"]
