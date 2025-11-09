// require('dotenv').config({path: './env'}) 
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"

dotenv.config({
    path:'/env'
})
connectDB()















// create a function and in next line we execute function.
// function connectDB(){}
// co nnectDB()
/*
import express from "express"
const app = express()
// this is iffy means create a function and execute at the same time.
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error) =>{
            console.log("ERROR :",error);
            throw error
        })

        app.listen(process.env.PORT,() =>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.log("ERROR : ",error)
        throw error
    }
})()

*/