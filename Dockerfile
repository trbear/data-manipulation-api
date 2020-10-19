FROM node:12-alpine as BASE
WORKDIR /app
COPY ["package.json", "./"]
# RUN apk add git
RUN npm install --only=production

FROM BASE as BUILD
WORKDIR /app
COPY . .
RUN npm install
# RUN npm run prebuild
RUN npm run build:prod

FROM BASE as PROD
ARG BUILD_ENV=dev
RUN echo ${BUILD_ENV}
ENV NODE_ENV ${BUILD_ENV}
WORKDIR /app
# COPY ${BUILD_ENV}.env .
COPY --from=BUILD /app/dist .
EXPOSE 3000
CMD npm run start:prod