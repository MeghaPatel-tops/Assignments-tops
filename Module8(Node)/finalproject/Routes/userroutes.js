const express = require('express')
const UserController = require('../Controller/UserController')
const authenticateToken = require('../Middleware/Auth')
const router = express.Router();

router.post('/register',(req,res)=>{
     UserController.userRegistration(req,res,(data,err)=>{
          if(data){
               res.status(200).json({"stscode":1,"msg":"User successfully inserted","user":data});
          }
          if(err){
               res.status(500).json({"stscode":0,"msg":err})
          }
     });
})

router.get('/viewuser',(req,res)=>{
     UserController.viewUsers(req,res,(data,err)=>{
          if(data){
               res.status(200).json({"stscode":1,"users":data});
          }
          if(err){
               res.status(500).json({"stscode":0,"msg":err})
          }

     })
})


router.get('/singleuser/:id',(req,res)=>{
     
     UserController.findUserId(req,res,(data,err)=>{
          if(data){
               res.status(200).json({"stscode":1,"user":data});
          }
          if(err){
               res.status(500).json({"stscode":0,"msg":err})
          }
     })
})

router.delete('/deleteuser/:id',(req,res)=>{
     UserController.deleteUser(req,res,(data,err)=>{
          if(data){
               res.status(200).json({"stscode":1,"user":data});
          }
          if(err){
               res.status(500).json({"stscode":0,"msg":err})
          }
     })
})

router.put('/edituser/:id',(req,res)=>{
     UserController.editUser(req,res,(data,err)=>{
          if(data){
               res.status(200).json({"stscode":1,"user":data});
          }
          if(err){
               res.status(500).json({"stscode":0,"msg":err})
          }
     })
})

router.post('/login',(req,res)=>{
     UserController.loginUser(req,res,(data,err)=>{
          if(data){
               res.status(200).json({"stscode":1,"user":data});
          }
          if(err){
               res.status(500).json({"stscode":0,"msg":err})
          }
     })
})

router.get('/getdata',authenticateToken,(req,res)=>{
     res.send({"msg":"Authorized User"})
})

router.get('/sendmail',(req,res)=>{
     UserController.sendMails(req,res,(data,err)=>{
          if(data){
               res.status(200).json({"stscode":1,"user":data});
          }
          if(err){
               res.status(500).json({"stscode":0,"msg":err})
          }
     })
})

module.exports = router
