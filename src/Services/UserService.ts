import express from "express";
import Product from "../models/product";
import { IProduct } from "../types";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data: IProduct[] = await Product.find().exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
