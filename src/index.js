// require('dotenv').config({path:'./env'})
// import express from "express"      
// const app = express()   
import dotenv from "dotenv"
import connectDB from "./db/index.js" 

import { app } from "./app.js"


dotenv.config({
    path:'./env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=> {
        console.log(`Server is running at port :${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO DB connection failed !! ",err)
})



















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
