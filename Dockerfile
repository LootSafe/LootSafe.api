FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 1337

# Start Ganache-CLI
RUN npm i -g ganache-cli

# This somehow needs to be run in a seperate process if the testrpc flag was fed to docker
RUN ganache-cli -l 0x134250805