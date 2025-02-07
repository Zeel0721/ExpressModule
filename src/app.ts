import express from "express";
import router from "./router";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION + "Inventory");
console.log("Not called every time");

app.use("/", router);

export default app;
