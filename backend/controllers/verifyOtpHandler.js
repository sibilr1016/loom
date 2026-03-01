import client from "../config/twilio.js";
import User from "../models/auth.schema.js";

export default async function verifyOtpHandler(req, res) {
  // console.log(req.body);
  const formattedPhone = `+91${req.body.phoneNumber}`;

  const verificationCheck = await client.verify.v2
    .services(process.env.TWILIO_SERVICE_SID)
    .verificationChecks.create({
      code: req.body.phoneOtp,
      to: formattedPhone,
    });

  if (verificationCheck.status == "approved") console.log("OTP approved");
  if (verificationCheck.status !== "approved") return;
  let user = await User.findOne({ phone: formattedPhone });

  if (!user) {
    return res.status(200).json({
      otpVerified: true,
      userExists: false,
    });
  }

  res.status(200).json({
    message: "OTP verified",
    userId: user._id,
  });
}
