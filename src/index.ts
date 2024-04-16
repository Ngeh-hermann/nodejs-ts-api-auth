import express from "express"
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from "mongoose"
import router from "./router"
require('dotenv').config()

const app = express()

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 8080
app.use(cors({
    credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080, () => {
    console.log(`Server is running on http://localhost:8080`);
})

 
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use('/', router())
