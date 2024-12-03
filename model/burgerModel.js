const mongoose = require("mongoose");

const burgerSchema = new mongoose.Schema({
 id: {
 type:Number,
 required: [true, "A burger must have an id."]
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
burgerSchema.set("collection", "burger");
const Burger = mongoose.model("Burger", burgerSchema);
module.exports = Burger;