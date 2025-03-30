const productSchema = require('../models/products')
// Get all products Function
const getAllProducts = async (req,res)=>{
    try{
        const products = await productSchema.find({});
        res.status(200).json({success:true,data:products})
    }catch(err){
        return res.status(404).json({success:false, message:'prodcuts not found'})
    }
}
// Add product function :
const addProduct = async (req,res)=>{
    try{
        const {name,price,image} = req.body;
        if(!name || !price || !image){
            return res.status(400).json({success:false,message:'pls provide all fields!'})
        }
        const product = await productSchema.create({name,price,image});
        res.status(201).json({success:true,message:'product added Successfly'})
    }catch(err)
    {
        console.error('ERROR:',err.message)
        res.status(500).json({success:false, message:'Server Crush'})
    }
}
// Delet Product function 
const deleteProduct = async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await productSchema.findByIdAndDelete(id);
        res.status(200).json({success:true, message:'product deleted'})
    }catch(err){
        console.error('ERROR:',err.message)
        res.status(404).json({success:false, message:'Product not Found'})
    }
}
// get product function :
const getProduct = async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await productSchema.findById(id);
        res.status(200).json({success:true, message:product})
    }catch(err){
        console.error('ERROR:',err.message)
        res.status(404).json({success:false, message:'Product not Found'})
    }
}
// update Product :
const updateProduct = async (req,res)=>{
    try{
        const {id} = req.params;
        const {name,price, image} = req.body;
        if(!name || !price || !image){
            return res.status(400).json({success:false,message:'pls provide all fields!'})
        }
        const updateeProduct = await productSchema.findByIdAndUpdate(id,{name,price,image},{new:true,runValidators:true});
        res.status(200).json({success:true,message:'Product updated'})

    }catch(err)
    {
        console.error('ERROR: ',err)
        res.status(404).json({success:false,message:'Product Not Found'})
    }
}

module.exports = {
    getAllProducts,
    updateProduct,
    deleteProduct,
    addProduct,
    getProduct
}