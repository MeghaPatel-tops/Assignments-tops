const mongoose = require('mongoose')

const UserSChema = new mongoose.Schema({
    username:{
    type:String,
    required:true,
   },
   email:{
    type:String,
    required:true,
   },
   password:{
    type:String,
    required:true,
   },
   contactno:{
    type:Number,
    required:true,
   },

})

module.exports =mongoose.model('users',UserSChema)
