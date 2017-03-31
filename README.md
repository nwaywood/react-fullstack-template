# React/NodeJS Project Template

This repository contains a project template for React/NodeJS development

1. [Features](#features)
1. [Getting Started](#getting-started)
1. [Application Structure](#application-structure)
1. [Development](#development)
1. [Deployment](#deployment)
1. [Linting and Formatting](#linting-and-formatting)
1. [ES6 Support](#es6-support)

## Features

* [react](https://github.com/facebook/react)
* [redux](https://github.com/reactjs/redux)
* [react-router](https://github.com/ReactTraining/react-router)
* [styled-components](https://github.com/styled-components/styled-components)
* [flow](https://flow.org/en/)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [eslint](http://eslint.org)
* [prettier](https://github.com/prettier/prettier)
* [nodemon](http://nodemon.io)
* [express](https://github.com/expressjs/express)

## Getting Started

Setup directory for project:

```bash
git clone git@github.ibm.com:aur/react-template-nodejs.git <your-project-name>
cd <your-project-name>
rm -rf .git
```

From the root directory, install the project dependencies and check that it works:

```bash
npm install           # install dependencies
npm start             # compile and launch
```

Note: The master branch contains 'vanilla' react state management with `setState()`, a `redux` branch is available
if your application state is more complex.

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
npm start
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

## Linting and Formatting

This project uses `prettier` integrated with `eslint` to show formatting errors via `eslint`. To automatically fix
these formatting errors you can run `npm run format`. However, it is recommended to integrate this functionality with
your editor to improve the development workflow.

## ES6 Support

If you need full ES6 support on the server-side (e.g. Javascript `import`), you need to run the server with `babel-node`.

In development mode, you can simply run:

```bash
npm start                 # Runs webpack dev server
npm run hot-server        # starts nodemon with ES6 support (babel-node)
```
