var mongoose = require('mongoose')
var UserModal = require('../Modal/UserModal')

const userRegistration=async(req,res)=>{
   try {
    const User= new UserModal (
        {
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        contactno:req.body.contactno}
    );
    const response = await User.save();
    console.log(response)

    
   } catch (error) {
        console.log(error)
   }
}


module.exports ={userRegistration}