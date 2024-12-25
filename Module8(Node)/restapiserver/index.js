const http = require('http');
const dotenv = require('dotenv').config()
const path = require('path')





http.createServer(function(req,res){
    const url = req.url;
    console.log(url)
    if(url== "/"){
        res.write(`<h1 style="color:green">Index Page</h1>`);
        res.end();
    }
    else if(url== "/about"){
        res.write(`<h1 style="color:green">This is the About Page.</h1>`);
        res.end();
    }
    else if(url== "/contact"){
        res.write(`<h1 style="color:green">This is the contact Page.</h1>`);
        res.end();
    }
    else if(url == "/users"){
        const Users = [{name:"Megha",email:"Megha@gmail.com",contact:"900090000",city:"surat"},{name:"Malay",email:"malay@",contact:"900099000",city:"Surat"},{name:"bhumi",email:"bhumi@gmail.com",contact:"999999",city:"surat"}];
        res.writeHead(200,{'content-type':'application/json'})
        res.write(JSON.stringify(Users));
        res.end()
    }
    
}).listen(process.env.PORT,()=>{
    console.log('server run on '+process.env.PORT)
})