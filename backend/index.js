// const express = require ('express'); method 1
import express from "express";  //method 2
import dotenv from "dotenv";
import connectDB from "./config/database.js"
dotenv.config({});

const app= express();

const PORT=process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`server listen at port ${PORT}`);
    connectDB();
})