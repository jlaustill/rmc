/**
 * Created by Joshua.Austill on 6/2/2016.
 */
if (!process.env.description) {
    console.log("Environment not defined, assuming local.");
    process.env.description = "local";
} else {
    console.log("Environment is " + process.env.description + ".");
}

var environment = require("./environment.json");
module.exports = environment[process.env.description];
