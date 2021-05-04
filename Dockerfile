FROM node:12-alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN yarn install --network-timeout 10000000
COPY . .
RUN yarn build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html