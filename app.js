import { configDotenv } from "dotenv"
import express from "express" 
import { userRoute } from "./Routes/userRoute.js" 
import cookieParser from "cookie-parser"
import cors from 'cors'
import { contactRoute } from "./Routes/contactRoute.js"

export const app = express() 
configDotenv(
    {path:"./Database/config.env"}
);
app.use(express.json())
app.use(cookieParser())

app.use(cors())

app.use('/user',userRoute);
app.use('/contact',contactRoute);
