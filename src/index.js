// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path:'./env'
})



connectDB()




















/*
import express from "express"
const app=express()

(async()=>{           // IIFE
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("Error: ",error)
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on PORT ${process.env.PORT}`)
       })
    }
    catch(error){
        console.error("ERROR",error)
        throw error
    }
})()      
*/         
// 1st approach to connect database using IIFE and async await\
// 2nd approach is the professional approach in whichwe write code in seperate file and import in other files
