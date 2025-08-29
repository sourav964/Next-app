import * as authService from "../services/auth.service.js";

export const login = async (req, res) => {
  try {
    const { identifier } = req.body;

    if (!identifier) {
      return res.status(400).json({ success: false, message: "Identifier required" });
    }

    const response = await authService.login(identifier);
    return res.status(response.success ? 200 : 400).json(response);
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { identifier, otp } = req.body;

    if (!identifier || !otp) {
      return res.status(400).json({ success: false, message: "Identifier and OTP required" });
    }

    const response = await authService.verifyOtp(identifier, otp);
    return res.status(response.success ? 200 : 400).json(response);
  } catch (error) {
    console.error("Verify OTP error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
