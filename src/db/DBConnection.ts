import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_DB_URL = process.env.MONGO_DB_URL as string
const DBConnection= async () => {
    try{
        const connection = await mongoose.connect(MONGO_DB_URL);
        return `Successfully connected to mongoDB at ${connection.connection.host}`;
    }catch (error){
        return "MongoDB connection failed:" + error;
    }
}

export default DBConnection;