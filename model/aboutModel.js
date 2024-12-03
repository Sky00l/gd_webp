const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
 id: {
 type:Number,
 required: [true, "An about must have an id."]
 },
 name: {
    type:  String,
 },
 category: {
    type:  String,
 },
 pic: {
    type:  String,
 },


});
aboutSchema.set("collection", "about");
const About = mongoose.model("About", aboutSchema);
module.exports = About;