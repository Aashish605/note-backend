import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import ConnectDB from './Db/db.js';
import list from "./Routes/List.Routes.js";
import Pdf from "./Routes/Pdf.Route.js";

const app = express();

app.use(cors());


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! Backend is running.');
});

app.use("/list", list);
app.use("/pdf", Pdf);


ConnectDB();


export default app;
