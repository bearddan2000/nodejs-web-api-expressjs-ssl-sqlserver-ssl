FROM node:latest

# Install production dependencies.
WORKDIR /app

COPY bin/ ./

RUN npm install

ENV WAIT_VERSION 2.7.2

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait

RUN chmod +x /wait

# Run the web service on container startup.
CMD ["node", "./index.js"]
