FROM node:16 as dev

WORKDIR /www
COPY . /www

# install projects node packages locally or enable next line (it will always install on every conatiner bild)
# RUN npm i

RUN npm install -g serverless
RUN npm install -g serverless-offline

EXPOSE 80

CMD ["serverless","offline","start","--stage", "local"]
