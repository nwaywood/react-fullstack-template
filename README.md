# React/NodeJS Project Template

This repository contains a project template for React/NodeJS development

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Application Structure](#application-structure)
4. [Development](#development)
5. [Deployment](#deployment)
6. [ES6 Support](#es6-support)

## Features

* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [express](https://github.com/expressjs/express)
* [eslint](http://eslint.org)
* [nodemon](http://nodemon.io)

## Getting Started

From the root directory, install the project dependencies and check that it works:

```bash
npm install           # install dependencies
npm start             # compile and launch
```

## Application Structure

```
.
├── app                 # Frontend application
│   ├── public          # Static resources (html, images etc)
│   └── src             # Source code, which is bundled into the `dist` folder by `webpack`
│       ├── components  # Presentation components
│       └── containers  # Container components
├── dist                # Build directory, which is served by the server as static directory
└── server              # Root folder for server code
```

Note: Refer to [this](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.469taxbj0) blog post for information on `presentational` vs `container` components

## Development

```bash
npm run start
```

to start the development server. If you need to communicate with the api:

```bash
npm run hot-server
```

and the devServer will proxy api calls to the backend express server... magic!

## Deployment

```bash
npm run build          # compile project into /dist folder
```

then you can serve the production app with

```bash
node server/app.js
```

By default the production server listens on port `3000`

If you want to run the application on port other than `3000`, simply define it as environment variable:

```bash
PORT=4000 node server/app.js
```

## ES6 Support

If you need full ES6 support on the server-side (e.g. Javascript `import`), you need to run the server with `babel-node`. There's an NPM script prepared for this:

```bash
npm run es6-production    # compiles the client (webpack) scripts and starts the `babel-node` server
```

In development mode, you can simply run:

```bash
npm run hot-server        # starts nodemon with ES6 support (babel-node)
npm run hot-client        # runs webpack in watch mode
```
