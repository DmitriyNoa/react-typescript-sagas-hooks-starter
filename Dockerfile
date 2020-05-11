FROM node:10-alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json package*.json
COPY yarn.lock yarn.lock
COPY src src
COPY tsconfig.json tsconfig.json
COPY static-server.js static-server.js
RUN npm install

RUN npm run build

EXPOSE 3000

# Running the app
CMD [ "npm", "start" ]