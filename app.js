import express from 'express';
import dotenv  from "dotenv";
import connectDB from './database/db.js';

dotenv.config();

const app = express();

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    connectDB();
    console.log('Server is running at port', port);
});