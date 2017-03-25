const router = require("express").Router();
const ThingContext = require(__appRoot + "/contexts/thingContext.js");
const thingContext = new ThingContext();

router.route("/all")
    .get((req, res) => {
        thingContext.getAllThings((things) => {
            res.json(things);
        }); // getAllThings
    }); // route.get

module.exports = router;