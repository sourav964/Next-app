import pool from "../config/db.js";

export const findUserByIdentifier = async (identifier) => {
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE identifier = ? LIMIT 1",
    [identifier]
  );
  return rows[0];
};

export const saveOtp = async (identifier, otp, expiry) => {
  await pool.query(
    "UPDATE users SET otp = ?, otp_expiry = ? WHERE identifier = ?",
    [otp, expiry, identifier]
  );
};
