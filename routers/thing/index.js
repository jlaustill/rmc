/**
 * Created by Joshua.Austill on 8/4/2016.
 */
const router = require("express").Router(),
      Thing = require(__appRoot + "/models/thingModel.js"),
      ThingContext = require(__appRoot + "/contexts/thingContext.js");

const thingContext = new ThingContext();

router.use(require("./all"));

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

module.exports = router;

