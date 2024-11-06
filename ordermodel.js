const  mongoose = require("mongoose");

const orderScheme = new mongoose.Schema({
    cartItems:Array,
    amount:String,
    status:String,
    CreatedAt:Date,
})

const ordermodel = mongoose.model('order',orderScheme);

module.exports = ordermodel;