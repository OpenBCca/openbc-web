# Dockerfile (For Development)
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm run build            
EXPOSE 3000
CMD ["npm", "start"]
