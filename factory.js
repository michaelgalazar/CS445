"use strict";
/*eslint-disable*/

function Regular(options) {
    this.name = options.name || "regular";
    this.lumens = options.lumens || "50-100";
    this.age = options.age || "1 year";
}
function EnergySaver(options) {
    this.name = options.name || "energysaver";
    this.lumens = options.lumens || "5-40";
    this.age = options.age || "10 years";
    this.color = options.color || "multiple colors";
}
const createBulb = function (options) {
    if (options.name === "regular") {
        return new Regular(options);
    } else if (options.name === "energysaver") {
        return new EnergySaver(options);
    }
};
const lightBulb1 = createBulb({
    name: "energysaver"})
    console.log(lightBulb1);

    const lightBulb2 = createBulb({name: "regular"});
    console.log(lightBulb2);