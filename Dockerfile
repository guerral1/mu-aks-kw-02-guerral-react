# pull official base image
FROM node:alpine

# set working directory
WORKDIR /app

# copy the json file first
COPY ./package.json /app

# copy other project files
COPY . .

# install npm dependencies
RUN npm install

# build the folder
CMD [ "npm", "run", "start" ]

