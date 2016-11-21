# React/NodeJS Project Template

This repository contains a project template for React/NodeJS development.

## Folder Structure

* `/app` - Frontend application
  * `/public` - static resources (html, images etc)
  * `/src` - source code, which is bundled into the `dist` folder by `webpack`.
    * `/components` - root folder for React components.
* `/server` - root folder for code that only runs on the server.
* `/dist` - build directory, which is served by the server as static directory.

## Installation

```
# all systems
npm install

# development only
npm install -g nodemon
```

## Run

```
# development
npm run start
nodemon server/app.js
```

```
# production
webpack -d
node server/app.js
```

If you want to run the application on port other than `3000`, simply define it as environment variable:

```
PORT=4000 node server/app.js
```
