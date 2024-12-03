const mongoose = require("mongoose");

const subwaySchema = new mongoose.Schema({
 id: {
 type:Number,
 required: [true, "An subway must have an id."]
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
subwaySchema.set("collection", "subway");
const Subway = mongoose.model("Subway", subwaySchema);
module.exports = Subway;