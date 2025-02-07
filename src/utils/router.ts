import express from "express";
import userApi from "../services/UserService";
import companyApi from "../services/CompanyService";
import productApi from "../services/ProductService";

const router = express.Router();

router.use("/api/user", userApi);
router.use("/api/company", companyApi);
router.use("/api/product", productApi);

export default router;
