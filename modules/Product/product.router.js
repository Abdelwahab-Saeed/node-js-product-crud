import express from 'express';
import {
    getAllProducts,
    getSingleProduct,
    addProduct,
    updateProduct,
    deleteProduct
} from "./product.controller.js";
const productRoutes = express.Router();

productRoutes.get('/', getAllProducts);
productRoutes.get('/show/:id', getSingleProduct);   
productRoutes.post('/', addProduct);
productRoutes.put('/update/:id', updateProduct);
productRoutes.delete('/delete/:id', deleteProduct);

export default productRoutes;