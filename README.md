# React/NodeJS Project Template

This repository contains a project template for React/NodeJS development

## Features

* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [express](https://github.com/expressjs/express)
* [eslint](http://eslint.org)

## Getting Started

From the root directory, install the project dependencies and check that it works:

```
$ npm install            # install dependencies
$ npm start              # compile and launch
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

Note: Prefer to [this](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.469taxbj0) blog post for information on `presentational` vs `container` components

## Development

`npm run start`

to start the development server. If you need to communicate with the api:

`nodemon server/app.js`

and the devServer will proxy api calls to the backend express server

## Deployment

```
npm run build              # compile project into /dist folder
```

then you can serve the production app with

```
node server/app.js
```

By default the production server listens on port `3000`

If you want to run the application on port other than `3000`, simply define it as environment variable:

```
PORT=4000 node server/app.js
```
