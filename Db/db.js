import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

async function ConnectDB() {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.Mongo, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 5000, // Timeout for server selection
            });
            console.log("MongoDB connected");
        }
    } catch (err) {
        console.error("MongoDB connection error", err);
        throw err;
    }
}

export default ConnectDB;
