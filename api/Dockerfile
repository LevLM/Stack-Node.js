FROM node:17-alpine

WORKDIR /stack

COPY . .

RUN npm install

EXPOSE 4000
# required for docker desktop port mapping

CMD ["node", "stack.js"]