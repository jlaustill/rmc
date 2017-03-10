/**
 * Created by Joshua Austill on 3/2/2017.
 */
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create the thing schema
let thingSchema = new Schema({
    name: String,
    date: { type: Date, default: Date.now }
});

// on every save, add the date
thingSchema.pre('save', (next) => {
    // get the current date
    let currentDate = new Date();

    // change the date field to current date
    this.date = currentDate;

    next();
});

// the schema is useless so far
// we need to create a model using it
let Thing = mongoose.model('Thing', thingSchema);

// make this available to our users in our Node applications
module.exports = Thing;
