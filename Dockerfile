# pull official base image
FROM  artifactory.manulife.ca/endorsed-docker/ets-node:20-debian12-2.7.0 AS builder

#set node env as PRODUCTION
ENV NODE_ENV production

WORKDIR /home/node

# copy .npmrc to get npm packages from Manulife Artifactory
COPY --chown=node:node .npmrc ./

# copy package.json and package-lock.json to get dependencies
COPY --chown=node:node package*.json ./

# install npm dependencies except dev dependencies
RUN npm ci --omit=dev

RUN rm .npmrc

# copy the rest of files (unless ignored in .dockerignore)
COPY --chown=node:node src ./src
COPY --chown=node:node public ./public
COPY --chown=node:node .env ./

# build static files
RUN npm run build

# production environment
FROM artifactory.manulife.ca/mfc-mu-docker/nginx-unprivileged:1.25.3-alpine
ENV NODE_ENV production
# copy static files to nginx folder

USER root

COPY --from=builder /home/node/build/ /usr/share/nginx/html

# Copy the default nginx.conf file as a template for the nginx so it can trigger the substitute function for replace environment variable
COPY ./nginx/default.nginx.conf /etc/nginx/templates/default.conf.template


RUN chown -R nginx:nginx /usr/share/nginx/html/ && \ 
  chown nginx:nginx /etc/nginx/templates/default.conf.template

USER nginx

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]