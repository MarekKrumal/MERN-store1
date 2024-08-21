//const express = require("express"); zastaraly zapis

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"

import productsRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //dovoluje nam porijmout JSON data v req.body

app.use("/api/products", productsRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});
