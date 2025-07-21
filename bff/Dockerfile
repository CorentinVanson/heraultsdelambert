FROM node:alpine as BUILD
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM node:alpine
WORKDIR /app
EXPOSE 3000
ENV NITRO_PRODUCTION=true
COPY --from=BUILD /build/.output /app
CMD ["node", "./server/index.mjs"]