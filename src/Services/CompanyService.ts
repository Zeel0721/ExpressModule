import express from "express";
import { ICompany } from "../utils/types";
import Company from "../models/company";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const companyCollection: ICompany[] = await Company.find().exec();
        res.send(companyCollection);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
