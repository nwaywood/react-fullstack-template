# React/NodeJS Project Template

This repository contains a project template for React/NodeJS development.

## Folder Structure

* `/client` - browser-related code and static files.
  * `/build` - build directory, which is served by the server as static directory.
    * `/public` - static resources and external libraries.
  * `/src` - source code, which is bundled into the `build` folder by `webpack`.
    * `/components` - root folder for React components.
* `/server` - root folder for code that only runs on the server.
* `/shared` - root folder for shared libraries that are used on the server-side and client-side.

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
nodemon app.js
```

```
# production
webpack -d
node app.js
```

If you want to run the application on port other than `3000`, simply define it as environment variable:

```
PORT=4000 node app.js
```
