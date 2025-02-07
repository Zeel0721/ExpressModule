import express, { NextFunction } from "express";
import { CollectionInterface } from "../types";
import { getDB } from "../dbConnection";

const router = express.Router();
let db: CollectionInterface;

router.use((_, __, next: NextFunction) => {
    db = getDB();
    next();
});

router.get("/", async (req, res) => {
    try {
        res.send(await db.userCollection.find().toArray());
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
