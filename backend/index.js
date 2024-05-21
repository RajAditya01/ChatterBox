// const express = require ('express'); method 1
import express from "express";  //method 2
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
dotenv.config({});

const app= express();

const PORT=process.env.PORT || 8080;

//routes 
app.use("/api/v1/user", userRoute)
//

app.listen(PORT, ()=>{
    console.log(`server listen at port ${PORT}`);
    connectDB();
})