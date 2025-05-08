import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100
    },
    price: {
        type: Number,
        required: true,
        min: 0.0
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





