import mongoose from "mongoose";
import Product from "../models/product.model.js" 

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ succes: true, data: products});
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    };
};

export const createProduct = async (req, res) => {
    
    const product = req.body; // uzivatel odesla tato data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ succes:false, message: "Please provide all fields"});
    }

    const newProduct = new Product (product)

    try {
        await newProduct.save();
        res.status(201).json({ succes: true, data: newProduct});
    } catch (error) {
        console.error("Error in Create product:", error.message);
        res.status(500).json({ succes: false, message: "Server Error"});
    };
};

export const updateProduct = async (req, res) => {
    const {id} = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({succes: false, message:"Invalid Product Id"});
    }

    try {
       const updatedProduct = await Product.findByIdAndUpdate(id, product,{ new: true });
       res.status(200).json({ success: true, data: updatedProduct});
    } catch (error) {
        res.status(500).json({ success: false, message:"Server Error"});
    };
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ succes: true, message: "Product deleted"});
    } catch (error) {
        console.log("error in deleteting product") // pridani console logu z duvody vice jednoducheho debbugingu
        res.status(404).json({ succes: false, message: "Product not found"});
    }
}

export default router;