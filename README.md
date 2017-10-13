# React Fullstack Template

This repository contains a project template for React/NodeJS development

1. [Features](#features)
1. [Getting Started](#getting-started)
1. [Application Structure](#application-structure)
1. [Development](#development)
1. [Deployment](#deployment)
1. [Linting and Formatting](#linting-and-formatting)
1. [History](#history)

## Features

* [react](https://github.com/facebook/react)
* [react-router](https://github.com/ReactTraining/react-router)
* [emotion](https://github.com/tkh44/emotion)
* [flow](https://flow.org/en/)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [eslint](http://eslint.org)
* [prettier](https://github.com/prettier/prettier)
* [nodemon](http://nodemon.io)
* [koa](https://github.com/koajs/koa)

## Getting Started

Setup directory for project:

```bash
git clone git@github.com:nwaywood/react-fullstack-template.git <your-project-name>
cd <your-project-name>
rm -rf .git
```

From the root directory, install the project dependencies and check that it works:

```bash
npm install           # install dependencies
npm run serve         # run the server
```

and then from another terminal:

```bash
npm start             # compile and launch
```

## Application Structure

```
.
├── app                            # Frontend application
│   ├── public                     # Static resources (html, images etc)
│   └── src                        # Source code, which is bundled into the `dist` folder by `webpack`
│       ├── index.js               # The entrypoint for the React application
│       ├── AppErrorBoundary.js    # Generic top level Error Boundary for the application
│       ├── globalCSS.js           # Any global CSS used in the application (should be kept to a minimum)
│       └── ...                    # Domain specific components
├── dist                           # Build directory, which is served by the server as static directory
└── server                         # Root folder for server code
```

Note: The structure of domain specific components within `/src` follow the `presentational` vs `component` model. Refer to [this](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.469taxbj0) blog post for more information

## Development

```bash
npm start
```

to start the development server. And to communicate with the api:

```bash
npm run serve:watch
```

and the devServer will proxy api calls to the backend koa server... magic!

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

## History

For an overview of the evolution of this template and key design decisions we have made, see [here](https://github.com/nwaywood/react-fullstack-template/tree/master/history.md)
