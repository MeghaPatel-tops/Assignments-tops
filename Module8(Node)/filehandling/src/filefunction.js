var fs = require('fs')

const displayMenu = () =>{
    const menu =`press 1 for write data into file \n press two read data \n press 3 for append data`;
    return menu;
}

const createFile =()=>{
    fs.writeFile("test.text","First file ",(err)=>{
        if(err){
            throw err
        }
    })

}

const readFileFunction = () =>{
    if(fs.existsSync("test.text")){
        console.log("file exists")
    }
    else{
        console.log("file not exists")
    }
    fs.readFile("test.text",'utf-8',(err,data)=>{
        if(err){
            throw err
        }      
        else{
            console.log(data)
        }
           
    })

    
}
const filerenameFunction=()=>{
    fs.rename("test.text","newname.text",(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("file name change")
        }
    })
}

const appendFileFunction = ()=>{
    fs.appendFile("test.text","\n New line added",(err)=>{
        if(err)
            throw err;

    })
}

const deleteFile=()=>{
    fs.unlink("test.text",(err)=>{
        if(err)
            throw err;
        console.log("file deleted")
    })
}

module.exports = {createFile,readFileFunction,appendFileFunction,filerenameFunction,displayMenu,deleteFile}