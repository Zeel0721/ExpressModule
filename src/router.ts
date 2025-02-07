import express from "express";
import userApi from "./Services/UserService";

const router = express.Router();

router.use("/api/user", userApi);

export default router;
