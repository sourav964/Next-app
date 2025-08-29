import * as userRepo from "../repositories/user.repository.js";
import jwt from "jsonwebtoken";

export const login = async (identifier) => {
  // Check user exists
  const user = await userRepo.findUserByIdentifier(identifier);
  if (!user) {
    return { success: false, message: "Invalid email or phone" };
  }

  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiry = new Date(Date.now() + 5 * 60 * 1000); // 5 mins

  // Save OTP
  await userRepo.saveOtp(identifier, otp, expiry);

  return {
    success: true,
    message: "OTP sent successfully",
    identifier,
    otp, // ⚠️ return for testing only
  };
};

export const verifyOtp = async (identifier, otp) => {
  const user = await userRepo.findUserByIdentifier(identifier);

  if (!user) {
    return { success: false, message: "User not found" };
  }

  if (!user.otp || user.otp !== otp) {
    return { success: false, message: "Invalid OTP" };
  }

  if (new Date(user.otp_expiry) < new Date()) {
    return { success: false, message: "OTP expired" };
  }

  // Create JWT token
  const token = jwt.sign(
    { id: user.id, identifier: user.identifier },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return { success: true, message: "Login successful", token };
};
