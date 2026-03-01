import express from "express";
import sendOtpHandler from "../controllers/sendOtpHandler.js";
import verifyOtpHandler from "../controllers/verifyOtpHandler.js";
import completeProfileHandler from "../controllers/completeProfileHandler.js";

const router = express.Router();

router.post("/send-otp", sendOtpHandler);
router.post("/verify-otp", verifyOtpHandler);
router.post("/complete-profile", completeProfileHandler);

export default router;
