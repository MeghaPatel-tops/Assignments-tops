const express  = require("express")
var app = express()
const maths = require("./mathstask")
const hbs = require('hbs')
var bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const commanTask = require('./src/whether')
const os= require('os')
 
//import fetch from 'node-fetch';


//app.engine('.hbs', engine({extname: '.hbs'}));
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine','hbs')

app.set('views',__dirname+'/views')

app.get("/",function(request,response){
    response.send("Hello World!kjhchjkhkjhx")
    })
app.get("/jsonexample",function(req,res){
   // const data='{"name":"John", "age":30, "city":"New York"}'
    try {
        //const obj = JSON.parse(data);
        const obj = maths.Addition(12,45)
        res.send(obj)
    } catch (error) {
        res.status(500).send({"Error":"Something wrong"})
        console.log(error)
    }
})  
app.get("/index",function(req,res){
    const User = {name:"Megha patel",course:"Mern Stack"}
    res.render('index',{userObj:User})
})

app.get('/getPost',async function(req,res){
        try {
           
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json();
            res.render('posts',{posts:data})
        } catch (error) {
            console.log(error)
        }   
})
app.get('/postadd',function(req,res){
      res.render('postadd');
})
app.post('/postadddb',async function(req,res){
    const postObj = {"name": "Apple MacBook Pro 16",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }}
    try {
        const reqPayload={
            method:"POST",
            body:JSON.stringify(postObj),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        const response = await fetch("https://api.restful-api.dev/objects",reqPayload);
        const data = response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
})
app.get('/wheatherapp',function(req,res){
    commanTask.whether((err,data)=>{
        if(err){
            res.json("something wrong")
        }
        else{
            res.render('weather',{whetherData:data})
        }
    })
})
app.get('/inbuiltmodule',function(req,res){
    console.log(os.platform())
        res.render('moduleex',{osdata:{plateform:os.platform(),architecture:os.arch()}})
})

    app.listen(10000, function () {
    console.log("Started application on port %d", 10000)
    });