const express = require('express')
const UserController = require('../Controller/UserController')

const router = express.Router();

router.post('/register',(req,res)=>{
     UserController.userRegistration(req,res);
})


module.exports = router
