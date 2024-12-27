var express = require('express')
var cors = require('cors')
var app = express()
var dotenv= require('dotenv').config()
app.options('*', cors()) // include before other routes
const userRoutes = require("./Routes/userroutes")
const bodyparser = require('body-parser')
const db = require('./Modal/db')
const logMiddleware = require('./Middleware/logmiddleware')
const rateLimitChecker = require('./Middleware/ratelimiter')
const multer = require('multer')

let path = require('path')
//file upload create Storage

const pathname = express.static(path.join(__dirname, '/uploads'));
console.log(pathname)
const storage = multer.diskStorage({
     destination:(req,file,cb)=>{
        cb(null,"")
     },
     filename:(req,file,cb)=>{
        cb(null,file.originalname)
     }
})


const uploadFile = multer({storage})

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(logMiddleware)
app.use(rateLimitChecker);

var port = process.env.PORT

app.use('/users/',userRoutes);
app.listen(port, function () {
    console.log('CORS-enabled web server listening on port 8000')
  })