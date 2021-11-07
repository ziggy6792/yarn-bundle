# use ecr to avoid pull rate limiting
# FROM 596905900055.dkr.ecr.ap-southeast-1.amazonaws.com/node:latest
FROM node:latest

ARG PACKAGE

WORKDIR /asset
COPY ./package.json .
COPY ./yarn.lock .
COPY ./packages/$PACKAGE/package.json  ./packages/$PACKAGE/package.json
COPY ./packages/$PACKAGE/dist/ ./packages/$PACKAGE/dist/ 
COPY ./packages/common/package.json  ./packages/common/package.json
COPY ./packages/common/dist/ ./packages/common/dist/ 

ENV NODE_ENV production
RUN yarn install --production
RUN npm install --global del-cli
# Delete aws-sdk to save space as aws env will provide it
# For some god knows what fucked up reason if I delete aws-sdk/node_modules the package can't be unzipped
RUN  del './node_modules/aws-sdk/!(node_modules)' 