const mongoose = require('mongoose');


const productSchema = new  mongoose.Schema({
    name:String,
    product:String,
    description:String,
    rating:String,
    images:{
        image:String,
    },
    category:String,
    seller:String,
    stock:String,
    numberofreviews:String,
    createdAt:String,
})

const productmodel = mongoose.model('product',productSchema)

module.exports = productmodel;