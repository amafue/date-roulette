import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const URI = process.env.connectionString

mongoose.connect(URI)
    .then(()=>console.log("Database connected"))
    .catch((err) => console.log("Data base error:", err))

export default mongoose.connection;
