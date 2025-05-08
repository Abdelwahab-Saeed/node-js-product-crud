import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default function connectDB() {
  const db = process.env.DB_URI;
  if (!db) {
    console.error("DB_URI is not defined in the environment variables");
    process.exit(1); 
  }

  mongoose.connect(db)
  .then(() => console.info("Database Connected"))
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1);
  });
}
