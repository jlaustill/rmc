const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const environment = require("../environment");
const assert = require("assert");
const ThingRouter = require('./thingRouter');

mongoose.Promise = global.Promise;
mongoose.connect(environment.connectionString);

router.use('/thing', new ThingRouter());

router.get("/", (req, res) => {
    res.json({"request": "successful", "version": "0.0.3", "environment": process.env.description});
});

module.exports = router;
