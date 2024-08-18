//const express = require("express"); zastaraly zapis

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"

dotenv.config();

const app = express();

app.get("/", (req,res) => {
    
    console.log(process.env.MONGO_URI)
})

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000")

});

//djbmv0Bds2r80HIj