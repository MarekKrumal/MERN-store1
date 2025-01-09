//const express = require("express"); zastaraly zapis

import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js"

import productsRoutes from "./routes/product.route.js"
import job from "./cron/cron.js";

dotenv.config();
job.start()

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); //dovoluje nam porijmout JSON data v req.body

app.use("/api/products", productsRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});
