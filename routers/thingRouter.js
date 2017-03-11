/**
 * Created by Joshua.Austill on 8/4/2016.
 */
const express = require('express');
const router = express.Router();
const Thing = require("../models/thingModel.js");
const ThingContext = require("../contexts/thingContext.js");

module.exports = class {
    constructor() {
        const thingContext = new ThingContext();

        router.route("/")
            .get((req, res) => {
                const id = req.query.id;
                thingContext.getThingById(id, (thing) => {
                    res.json(thing);
                }); // getThingById
            }) // route.get
            .post((req, res) => {
                const thing = new Thing({"name": req.body.name});

                thingContext.saveThing(thing, (result) => {
                    res.json(result);
                }); // postThing
            }); // route.post

        router.route("/all")
            .get((req, res) => {
                thingContext.getAllThings((things) => {
                    res.json(things);
                }); // getAllThings
            }); // route.get

        return router;
    } // constructor
}; // ThingRouter