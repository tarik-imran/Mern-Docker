FROM node:alpine

WORKDIR /backend

COPY package.json ./
COPY package-lock.json ./
RUN npm i 
COPY . ./
CMD ["npm", "start"]