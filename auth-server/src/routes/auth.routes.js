import express from "express";
import { login, verifyOtp } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/verify-otp", verifyOtp);

export default router;
