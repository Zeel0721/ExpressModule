import express from "express";
import { IProduct } from "../utils/types";
import Product from "../models/product";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const productCollection: IProduct[] = await Product.find().exec();
        res.send(productCollection);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
