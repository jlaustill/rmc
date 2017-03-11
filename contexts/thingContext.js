/**
 * Created by Joshua.Austill on 3/3/2017.
 */
const ObjectId = require("mongodb").ObjectID,
      Thing = require("../models/thingModel.js");

module.exports = class {
    getThingById (id, callback) {
        Thing.find(
                {"_id": new ObjectId(id)},
                (err, thing) => {
                    if (null !== err) {
                        return callback({"errors": [err]});
                    } else {
                        return callback(thing);
                    }
                });
    } // getThingById

    saveThing (thing, callback) {
        thing.save( (err, result) => {
                if (err === null) {
                    return callback(result);
                } else {
                    return callback({"errors": [err]});
                } // if
            }); // insertOne()
    } // saveThing

    getAllThings (callback) {
        Thing.find((err, result) => {
                if (err === null) {
                    return callback(result);
                } else {
                    return callback({"errors": [err]});
                } // if
            }); // find
    } // getAllThings
}; // module.exports
