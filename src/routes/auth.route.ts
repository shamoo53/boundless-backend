import express from "express";
import {
  register,
  login,
  githubAuth,
  googleAuth,
  getMe,
  logout,
  verifyOtp,
  resendOtp,
} from "../controllers/auth.controller";
import { protect } from "../middleware/auth";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/github", githubAuth);
router.post("/google", googleAuth);
router.get("/me", protect, getMe);
router.post("/logout", protect, logout);
router.post("/verify-otp", verifyOtp);
router.post("/resend-otp", resendOtp);

export default router;
