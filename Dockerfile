# FROM node:16.10-alpine as builder

# WORKDIR /app

# COPY package*.json ./

# RUN npm install
# RUN npm run build
# RUN rm -fr node_modules

# # FROM nginx:1.21.0-alpine
# # COPY --from=build-stage /app/build /usr/share/nginx/html
# # COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 8088

# CMD [ "serve", "-s", "build" ]



FROM node:16-alpine as build-stage
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build
RUN rm -fr node_modules

FROM nginx:1.17-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]