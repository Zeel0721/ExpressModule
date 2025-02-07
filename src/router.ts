import express from "express";
import userApi from "./services/UserService";

const router = express.Router();

router.use("/api/user", userApi);

export default router;
