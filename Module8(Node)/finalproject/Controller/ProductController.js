const productSchema = require('../Modal/ProductModal')
var path = require('path')



const addProduct = async (req,res,cb)=>{
    
   try {
        const {productname,price,description,qty}=req.body;
        const ProductObj = new productSchema({
            productname,price,description,qty,image:req.file.filename
        });
        const response = await ProductObj.save();
        cb(response)
        console.log("db response")
        console.log(response)
        
   } catch (error) {
        cb(undefined,error)
   }
}

const getProduct = async(req,res,cb)=>{
    try {
        const products = await productSchema.find();
        cb(products)
    } catch (error) {
        cb(undefined,error)
    }
}

const deleteProduct = async(req,res,cb)=>{
    try {
        id=req.params.id;
        const res= await productSchema.deleteOne({_id:id});
        cb(data)
    } catch (error) {
        cb(error)
    }
}

const editProduct = async(req,res,cb)=>{
    const id=req.params.id
    try {
        const product = await productSchema.findById({_id:id});
        cb(product)
    } catch (error) {
        cb(error)
    }
}

const updateProduct=async(req,res,cb)=>{
    console.log(req.body)
   try {
    const id = req.body.userId;
    console.log(req.body.userId)
    const product={
        productname:req.body.productname,
        price:req.body.price,
        description:req.body.description,
        qty:req.body.qty
    };
    console.log(product)
    const updateData = await productSchema.updateOne({_id:id},product,{})
    console.log(updateData)
    cb(updateData)
   } catch (error) {
    cb(undefined,error)
   }
}

module.exports={addProduct,getProduct,deleteProduct,editProduct,updateProduct}