var mongoose = require('mongoose')
var UserModal = require('../Modal/UserModal')

const userRegistration=async(req,res,cb)=>{
   try {
    const User= new UserModal (
        {
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        contactno:req.body.contactno}
    );
    const response = await User.save();
    cb(response)

    
   } catch (error) {
        console.log(error)
        cb("",error)
   }
}

const viewUsers = async(req,res,cb)=>{
    try {
        const userData = await UserModal.find();
        cb(userData)
    } catch (error) {
        cb(undefined,error)
    }
}

const findUserId= async(req,res,cb)=>{
    const id= req.params.id;
   
    try {
        const userData = await UserModal.findById(id)
        console.log(userData)
        cb(userData)
    } catch (error) {
        cb(undefined,error)
    }
}

const deleteUser = async(req,res,cb)=>{
    const id = req.params.id;
    try {
        const delData= await UserModal.deleteOne({_id:id})
        cb(delData)
    } catch (error) {
        cb(undefined,error)
    }
}

const editUser = async(req,res,cb)=>{
    const id = req.params.id;
    const user= {
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        contactno:req.body.contactno};
    try {
        const data = await UserModal.updateOne({_id:id},user);
        cb(data);
    } catch (error) {
        cb(undefined,error)
    }
}


module.exports ={userRegistration,viewUsers,findUserId,deleteUser,editUser}