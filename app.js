import express from 'express';
import dotenv  from "dotenv";
import connectDB from './database/db.js';
import productRoutes from './modules/Product/product.router.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/products', productRoutes);

const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => {
    connectDB();
    console.log('Server is running at port', port);
});