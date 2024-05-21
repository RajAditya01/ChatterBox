// const express = require ('express'); method 1
import express from "express";  //method 2

const app= express();

const PORT=8080;

app.listen(PORT, ()=>{
    console.log(`server listen at port ${PORT}`);
})