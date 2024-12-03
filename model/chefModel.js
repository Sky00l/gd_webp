const mongoose = require("mongoose");

const chefSchema = new mongoose.Schema({
 id: {
 type:Number,
 required: [true, "An chef must have an id."]
 },
 name: {
    type:  String,
 },
 pic: {
    type:  String,
 },


});
chefSchema.set("collection", "chef");
const Chef = mongoose.model("Chef", chefSchema);
module.exports = Chef;