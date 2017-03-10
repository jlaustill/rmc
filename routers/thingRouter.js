/**
 * Created by Joshua.Austill on 8/4/2016.
 */
let express = require('express');
let router = express.Router();
let Thing = require("../models/thingModel.js");
let ThingContext = require("../contexts/thingContext.js");

module.exports = class {
    constructor() {
        let thingContext = new ThingContext();

        router.route("/")
            .get((req, res) => {
                let id = req.query.id;
                thingContext.getThingById(id, (thing) => {
                    res.json(thing);
                }); // getThingById
            }) // route.get
            .post((req, res) => {
                let thing = new Thing({"name": req.body.name});

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