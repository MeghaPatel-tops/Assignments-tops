var express = require('express')
var dotenv=require('dotenv').config()
var app = express()
var port = process.env.PORT
var fs = require('fs')
var filefunction = require('./src/filefunction')
const readline = require('node:readline');
const {Readable}= require('stream')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public'))) 



app.get('/',function(req,res){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      
    const menudata = filefunction.displayMenu();
    rl.question(menudata,choice=>{
        console.log(choice)
        choice = parseInt(choice)
        switch(choice){
            case 1:
                filefunction.createFile();
                break;
            default:
                console.log("Wrong choice");
                break;    
        }
        rl.close();
    })  
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

app.get('/deletefile',function(req,res){
    filefunction.deleteFile();
})

app.get('/createdir',function(req,res){
    // fs.mkdir("Image",(err)=>{
    //     if(err)
    //         throw err;
    //     console.log("Folder created")
    // })
})

app.get('/copyfile',function(req,res){
    // fs.copyFile("newname.text","test1.text",(err)=>{
    //     if(err)
    //         throw err
    //     console.log("file copied")
    // })
    console.log(fs.watch("test1.text"))
})

app.get('/createuser',function(req,res){
    const user={name:"megha",email:"megha@gmail.com",contactno:"90000000",city:"surat"}
    const userData = JSON.stringify(user)
    fs.writeFileSync("user.json",userData,(err)=>{
        console.log(userData+"added into file")
    })
})
app.get('/getuser',function(req,res){
   const data = fs.readFileSync("user.json","utf-8");
   console.log(data)
})

app.get('createstream',function(req,res){
    const inStream = new Readable({
        read() {}
    })
    inStream.push("Tops technology")
    inStream.push("Mern Stack")

    inStream.push(null)
    inStream.pipe(process.stdout)
    //===============================
    async function logChunks(readable) {
        for await (const chunk of readable) {
          console.log(chunk);
        }
      }
      
      const readable = fs.createReadStream(
        'test1.txt', {encoding: 'utf8'});
      logChunks(readable);
      
})

app.get('/htmlfile',function(req,res){
    var result="";
    fs.readFile('./public/home.html',"utf-8",(err,data) =>{
        if(err){
            console.log(err);
        }
        else{
            result = data;
            console.log(result)
        }
        //res.writeHead(200,{'content-type':'plain/html'});
        res.send(result);
        
    })
})

app.listen(process.env.PORT,function(){
    console.log(`app listing on ${process.env.PORT}`)

})


