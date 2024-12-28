const express = require('express')
const router = express.Router();
var  ProductModal = require('../Modal/ProductModal')
const ProductController = require('../Controller/ProductController')
const multer = require('multer');
let path = require('path')
//file upload create Storage

const pathname = path.join(__dirname,'../uploads/Products')

const pathname1 = express.static(path.join(__dirname, '/uploads'));

console.log(pathname)
const storage = multer.diskStorage({
     destination:(req,file,cb)=>{
        cb(null,pathname)
     },
     filename:(req,file,cb)=>{
        cb(null,file.originalname)
     }
})


const uploadProductFile = multer({storage})

router.get('/',(req,res)=>{
    console.log(pathname1)
    ProductController.getProduct(req,res,(data,err)=>{
        if(data){
            res.render('views/view',{products:data});
        }
    })
})

router.get('/productadd',(req,res)=>{
    res.render('views/add');
})

router.post('/add',uploadProductFile.single('file'),(req,res)=>{
    ProductController.addProduct(req,res,(data,err)=>{
         if(data){
            res.redirect('/product/')
         }
         else{
            res.status(500).json({"msg":err})
         }
    })

})

router.get('/delete/:id',(req,res)=>{
    ProductController.deleteProduct(req,res,(data,err)=>{
        if(data){
            res.redirect('/product/');
        }
    })
})

router.get('/edit/:id',(req,res)=>{
    ProductController.editProduct(req,res,(data,err)=>{
        if(data){
            res.render('views/edit',{product:data})
        }
    })
})

router.post('/update',(req,res)=>{
    console.log(req.body)
    // ProductController.updateProduct(req,res,(data,err)=>{
    //     if(data){
    //         //res.redirect('/product/')
    //     }
    // })
})

module.exports = router