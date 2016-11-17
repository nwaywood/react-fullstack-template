/**
 * Created by Peter Ilfrich
 * Copyright (c) 2016 IBM Research. All rights reserved.
 *
 *
 */
/*
 * Loading the environment with default fallbacks
 */
const HTTP_PORT = process.env.PORT || 3000;


/*
 * NPM imports
 */
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');


/*
 * Basic fallback for front-end resources
 */
app.use(express.static('client/build'));

/*
 * Parsing JSON body e.g. for POST calls
 */
var jsonParser = bodyParser.json()

/*
 * Start the app
 */
app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`);
});


/*
 * Declare GET, POST, DELETE, PUT, etc. endpoints
 */



/* Example for a post endpoint using the json body parser */
/*
app.post('/my/endpoint', jsonParser, (req, res) => {
    // retrieve request data
    const data = req.body;

    // return some dummy status
    res.send({ status: 'OK' });
});
*/
