import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import ConnectDB from './Db/db.js';
import list from "./Routes/List.Routes.js";
import Pdf from "./Routes/Pdf.Route.js";

const app = express();

app.use(
    cors({
        origin: "*", // Allow all origins for serverless compatibility
        credentials: true,
        methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "Set-Cookie"],
        exposedHeaders: ["Set-Cookie"]
    })
);

app.use(express.json()); // Ensure JSON parsing middleware is included

app.get('/', (req, res) => {
    res.send('Hello World! Backend is running.');
});

app.use("/list", list);
app.use("/pdf", Pdf);

// Connect to MongoDB
ConnectDB();

// Export the app for serverless deployment
export default app;
