const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/*
 * Loading the environment with default fallbacks
 */
const HTTP_PORT = process.env.PORT || 3000;





/*
 * Basic fallback for front-end resources
 */
app.use(express.static('dist'));

/*
 * Parsing JSON body e.g. for POST calls
 */
const jsonParser = bodyParser.json()

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
