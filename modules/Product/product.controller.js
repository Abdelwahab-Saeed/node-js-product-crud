import mongoose from "mongoose";
import ProductModel from "../../database/models/product.model.js";

export const getAllProducts = async (req, res) => {
    try{
        const products = await ProductModel.find();

        if(products.length === 0) return res.status(200).json({message: "We have no products at the time!"});

        res.status(200).json({message:"Products fetched successfully", data: products});

    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export const getSingleProduct = async (req, res) => {
    try{
        const {id} = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({message: "Invalid Id format!"});

        const product = await ProductModel.findById(id);

        if(!product) return res.status(404).json({message: "A product with that id does not exist!"});

        res.status(200).json({message:"Product fetched successfully", data: product});

    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export const addProduct = async (req,res) => {
    const product = req.body;

    if(!product.name || !product.price || !product.image) return res.status(400).json({ success: false, message: "Please provide all required fields"});

    const newProduct = new ProductModel(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, message: "Product added successfully", data: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export const updateProduct = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({message: "Invalid Id format!"});

    try {
        const product = req.body;
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, product, {new: true});

        if(!updatedProduct) return res.status(404).json({success: false, message: "Product with that id does not exist!"});

        res.status(200).json({success: true, message: "Product updated successfully", data: updatedProduct});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export const deleteProduct = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({message: "Invalid Id format!"});

    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(id);

        if(!deletedProduct) return res.status(404).json({success: false, message: "Product with that id does not exist!"});

        res.status(200).json({success: true, message: "Product deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }

}