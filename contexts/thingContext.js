/**
 * Created by Joshua.Austill on 3/3/2017.
 */
let environment = require("../environment");
let ObjectId = require("mongodb").ObjectID;

module.exports = (db) => {
    "use strict";
    let context = {};

    context.getThingById = (id, callback) => {
        db.db(environment.database)
            .collection("things")
            .findOne({"_id": new ObjectId(id)},
                function (err, thing) {
                    if (null !== err) {
                        return callback({"errors": [{"something": "bad"}]});
                    } else {
                        return callback(thing);
                    }
                });
    }; // getThingById

    context.postThing = (thing, callback) => {
        db.db(environment.database)
            .collection("things")
            .insertOne(thing, function (err, result) {
                if (err === null) {
                    return callback(result);
                } else {
                    return callback({"errors": [{"something": "bad"}]});
                } // if
            }); // insertOne()
    }; // postThing

    context.getAllThings = (callback) => {
        db.db(environment.database)
            .collection("things")
            .find()
            .toArray((err, result) => {
                if (err === null) {
                    return callback(result);
                } else {
                    return callback({"errors": [{"something": "bad"}]});
                } // if
            }); // find
    }; // getAllThings

    return context;
}; // module.exports
