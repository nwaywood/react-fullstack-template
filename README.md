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

### Development

`npm run start`

to start the development server. If you need to communicate with the api:

`nodemon server/app.js`

### Production

```
npm run build
node server/app.js
```

By default the production server that on port `3000`

If you want to run the application on port other than `3000`, simply define it as environment variable:

```
PORT=4000 node server/app.js
```
