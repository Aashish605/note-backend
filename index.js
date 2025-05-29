import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import ConnectDB from './Db/db.js'
import list from "./Routes/List.Routes.js";
import Pdf from "./Routes/Pdf.Route.js";

const app = express();


app.use(
    cors({
        origin: "http://localhost:5173", 
        credentials: true,
        methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "Set-Cookie"],
        exposedHeaders: ["Set-Cookie"]
    })
);


app.get('/', (req, res) => {
    res.send('Hello World i am aashish');
});

app.use("/list",list)

app.use("/pdf",Pdf)


async function startServer() {
    try {
        await ConnectDB();
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("error during starting server", error.message);
    }
}
startServer();
