/**
 * Created by Joshua.Austill on 3/2/2017.
 */
const express = require("express");
const app = express();
const compression = require('compression');
app.use(compression());
const bodyParser = require("body-parser");
const environment = require("./environment");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('./routers'));

app.use((req, res) => {
    res.sendStatus(404);
});

const server = app.listen(3000, () => {
    const port = server.address().port;
    console.log("rmcapi server listening on port %s.", port);
});
