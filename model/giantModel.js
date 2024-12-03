const mongoose = require("mongoose");

const giantSchema = new mongoose.Schema({
 id: {
 type:Number,
 required: [true, "A giant must have an id."]
 },
 name: {
    type:  String,
 },
 money: {
    type:  String,
 },
 pic: {
    type:  String,
 },


});
giantSchema.set("collection", "giant");
const Giant = mongoose.model("Giant", giantSchema);
module.exports = Giant;