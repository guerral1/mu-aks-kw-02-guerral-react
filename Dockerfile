# Stage 1 - build
FROM endorsed-docker.artifactory.platform.manulife.io/ets-node:22-debian12-latest AS builder
ENV NODE_ENV=production
WORKDIR /home/mfc
COPY --chown=mfc:mfc .npmrc ./
COPY --chown=mfc:mfc package*.json ./
RUN npm ci --omit=dev
RUN rm .npmrc
COPY --chown=mfc:mfc src ./src
COPY --chown=mfc:mfc public ./public
COPY --chown=mfc:mfc .env ./
RUN npm run build

# Stage 2 - serve with nginx
FROM docker-local.artifactory.platform.manulife.io/nginx:1.22.1
ENV NODE_ENV production
USER root
COPY --from=builder /home/mfc/build/ /usr/share/nginx/html
COPY ./nginx/default.nginx.conf /etc/nginx/templates/default.conf.template
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
RUN touch /var/run/nginx.pid
ENV NGINX_ENVSUBST_OUTPUT_DIR=/tmp/nginx/conf.d
RUN mkdir -p /tmp/nginx/conf.d
RUN chown -R nginx:nginx /usr/share/nginx/html/ && \
    chown nginx:nginx /etc/nginx/templates/default.conf.template /var/cache/nginx /var/run/nginx.pid /tmp/nginx/conf.d
USER nginx
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]