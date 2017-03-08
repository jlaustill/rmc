let express = require('express');
let router = express.Router();
let MongoClient = require("mongodb").MongoClient;
let environment = require("../environment");
let assert = require("assert");
let ThingRouter = require('./thingRouter');

MongoClient.connect(environment.connectionString, {}, (err, db) => {
    assert.equal(null, err);

    router.use('/thing', new ThingRouter(db));
}); //MongoClient.connect


router.get("/", (req, res) => {
    res.json({"request": "successful", "version": "0.0.3", "environment": process.env.description});
});

module.exports = router;
