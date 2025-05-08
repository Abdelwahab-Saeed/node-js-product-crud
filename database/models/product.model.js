import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
}, {
   timestamps: true,
   versionKey: false    
});

const ProductModel = mongoose.model("Product", productSchema); 

export default ProductModel;





