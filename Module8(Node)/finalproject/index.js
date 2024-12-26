var express = require('express')
var cors = require('cors')
var app = express()
var dotenv= require('dotenv').config()
app.options('*', cors()) // include before other routes
const userRoutes = require("./Routes/userroutes")
const bodyparser = require('body-parser')
const db = require('./Modal/db')
const logMiddleware = require('./Middleware/logmiddleware')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(logMiddleware)

var port = process.env.PORT

app.use('/users/',userRoutes);
app.listen(port, function () {
    console.log('CORS-enabled web server listening on port 8000')
  })