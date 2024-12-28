const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    qty:{
        type:Number
    },
    image:{
        type:String,
    }
})

module.exports = mongoose.model('products',productSchema)