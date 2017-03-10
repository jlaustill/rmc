let express = require('express');
let router = express.Router();
let MongoClient = require("mongodb").MongoClient;
let mongoose = require("mongoose");
let environment = require("../environment");
let assert = require("assert");
let ThingRouter = require('./thingRouter');

mongoose.connect(environment.connectionString);

router.use('/thing', new ThingRouter());

router.get("/", (req, res) => {
    res.json({"request": "successful", "version": "0.0.3", "environment": process.env.description});
});

module.exports = router;
