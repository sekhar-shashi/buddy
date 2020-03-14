FROM node:10-slim@sha256:2fa03d4ee9b4a61115426c25e4a999c035acdde662993c73d8a0e1f927f759fd
# Update npm version
RUN npm i -g npm
# Install pm2
RUN npm install pm2 mocha nyc eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import babel-eslint -g
