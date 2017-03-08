/**
 * Created by Joshua Austill on 3/2/2017.
 */
let ObjectId = require("mongodb").ObjectID;

class ThingModel {
    constructor(thing) {
        thing = thing || {};

        // values
        this._id = thing._id || new ObjectId();
        this.name = thing.name || "";
        this.date = thing.date ? new Date(thing.date) : new Date();
    }

    asJSON() {
        return {
            _id: this._id,
            name: this.name,
	        date: this.date
        };
    }
}

module.exports = ThingModel;
