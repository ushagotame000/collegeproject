import express from "express";
import { signupUser, loginUser, verifyToken } from "../controllers/authController.js";

const router = express.Router();
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/verify-token",verifyToken);
export default router;
