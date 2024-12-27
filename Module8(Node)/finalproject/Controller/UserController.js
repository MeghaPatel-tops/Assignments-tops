var mongoose = require('mongoose')
var UserModal = require('../Modal/UserModal')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')


const userRegistration=async(req,res,cb)=>{
   try {
    const salt = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(req.body.password,salt)
    //console.log(hashPass)
    const User= new UserModal (
        {
        username:req.body.username,
        email:req.body.email,
        password:hashPass,
        contactno:req.body.contactno,
        image:req.file.filename
    }
    );
    const response = await User.save();
    const tokenSecret = process.env.JWT_SECRET_KEY;
                const data = {
                    time:Date(),
                    userId:User._id
                }
    const token = jwt.sign(data,tokenSecret,{ expiresIn: "1h" });
    cb({"userId":response._id,"email":response.email,"token":token})

    
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

const loginUser = async(req,res,cb)=>{
    try {
        const pass= req.body.password
        const User = await UserModal.findOne({email:req.body.email});
        if(User){
            const dbPassword= User.password;
            const flag = await bcrypt.compare(pass,dbPassword);
            if(flag){
                const tokenSecret = process.env.JWT_SECRET_KEY;
                const data = {
                    time:Date(),
                    userId:User._id
                }
                const token = jwt.sign(data,tokenSecret,{ expiresIn: "1h" });
                cb({"userId":User._id,"email":User.email,"token":token});
            }
            else{
                cb({"msg":"password doesn't match."});
            }

        }
        else{
            cb({"msg":"Email not found"})
        }
        
    } catch (error) {
        cb(error)
    }
}

const sendMails = async(req,res,cb)=>{
    const mailData = {
        from: 'meghapatel1.tops@gmail.com',  // sender address
          to: 'megha.95patel@gmail.com',   // list of receivers
          subject: 'Test mail',
          text: 'That was easy!',
          html: `<b>Hey there! </b>
                 <br> This is our first message sent with Nodemailer<br/>`,
        };
        var transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            auth: {
              user: "meghapatel1.tops@gmail.com",
              pass: "eyic mmld ckji oyxb"
            }
          });
          transport.sendMail(mailData, function (err, info) {
            if(err)
              cb(undefined,err)
            else
              cb(info)
         });
}

module.exports ={userRegistration,viewUsers,findUserId,deleteUser,editUser,loginUser,sendMails}