import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))


// here we use middleware for defing that how much we can receive data through json.
app.use(express.json({limit:"16kb"}));

// here define that we can also accept data from url.
app.use(express.urlencoded({extended:true,limit:"16kb"}))

// here we define that we accept any files:img, videos and etc.and store them in our server temporary.
app.use(express.static("public"))

// here we can just use like this.
app.use(cookieParser())


export {app}