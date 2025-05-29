import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import session from "express-session";
import ConnectDB from './Db/db.js';
import list from "./Routes/List.Routes.js";
import Pdf from "./Routes/Pdf.Route.js";

const app = express();

app.use(
    cors({
        origin: "https://note-frontend-fawn.vercel.app", // Allow your frontend domain
        credentials: true, // Allow cookies and credentials
        methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
        allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    })
);

app.use(session({
    resave: true,              // Changed to true to ensure session is saved
    saveUninitialized: false,
    proxy: true,               // Trust the reverse proxy
    cookie: {
        secure: true,            // Required for HTTPS
        httpOnly: true,
        sameSite: 'none',       // Required for cross-origin
        maxAge: 1000 * 60 * 60 * 24 * 7,  // 7 days
        path: '/',
    }
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! Backend is running.');
});

app.use("/list", list);
app.use("/pdf", Pdf);


ConnectDB();


export default app;
