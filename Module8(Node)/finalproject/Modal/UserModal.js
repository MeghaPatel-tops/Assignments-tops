const mongoose = require('mongoose')

const UserSChema = new mongoose.Schema({
    username:{
    type:String,
    require:true,
   },
   email:{
    type:String,
    require:true,
   },
   password:{
    type:String,
    require:true,
   },
   contactno:{
    type:Number,
    require:true,
   },

})

module.exports =mongoose.model('users',UserSChema)
