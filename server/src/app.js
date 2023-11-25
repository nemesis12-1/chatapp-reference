import express from 'express';
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from 'dotenv';
import router from './routes/routes.js';


dotenv.config({
    path: ".env",
});

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cookieParser())

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use('/', router);


export { app };