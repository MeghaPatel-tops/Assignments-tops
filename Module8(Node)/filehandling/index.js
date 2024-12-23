var express = require('express')
var dotenv=require('dotenv').config()
var app = express()
var port = process.env.PORT
var fs = require('fs')
var filefunction = require('./src/filefunction')

app.get('/',function(req,res){
    res.send("Welcome to node app")
})

//==============create text file===================
app.get('/create',function(req,res){
     filefunction.createFile()
})
app.get('/read',function(req,res){
    filefunction.readFileFunction()
})
app.get('/append',function(req,res){
    filefunction.appendFileFunction()
})

app.get('/filerename',function(req,res){
    filefunction.filerenameFunction()
})


app.listen(process.env.PORT,function(){
    console.log(`app listing on ${process.env.PORT}`)

})


