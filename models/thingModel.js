/**
 * Created by Joshua Austill on 3/2/2017.
 */
const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

// create the thing schema
thingSchema = new Schema({
    name: String,
    date: { type: Date, default: Date.now }
});

// on every save, add the date
thingSchema.pre('save', (next) => {
    // change the date field to current date
    this.date = new Date();

    next();
});

// the schema is useless so far
// we need to create a model using it
const Thing = mongoose.model("Thing", thingSchema);

// make this available to our users in our Node applications
module.exports = Thing;
