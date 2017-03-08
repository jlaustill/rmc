/**
 * Created by Joshua.Austill on 3/2/2017.
 */
let express = require("express");
let app = express();
let compression = require('compression');
app.use(compression());
let bodyParser = require("body-parser");
let environment = require("./environment");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('./routers'));

app.use((req, res) => {
    res.sendStatus(404);
});

let server = app.listen(3000, () => {
    let port = server.address().port;
    console.log("rmcapi server listening on port %s.", port);
});
