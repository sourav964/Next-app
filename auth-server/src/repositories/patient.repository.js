import db from "../config/db.js";

export const createPatient = async (data) => {
  const [result] = await db.query(
    "INSERT INTO patients (name,email, age, phone,gender, address) VALUES (?,?, ?, ?,?, ?)",
    [data.name,data.email, data.age, data.phone,data.gender, data.address]
  );
  return { id: result.insertId, ...data };
};

export const getPatients = async () => {
  const [rows] = await db.query("SELECT * FROM patients");
  return rows;
};

export const getPatientById = async (id) => {
  const [rows] = await db.query("SELECT * FROM patients WHERE id = ?", [id]);
  return rows[0];
};

export const updatePatient = async (id, data) => {
  await db.query(
    "UPDATE patients SET name=?,email=?, age=?, phone=?, gender=?, address=? WHERE id=?",
    [data.name,data.email, data.age, data.phone, data.gender,data.address, id]
  );
  return { id, ...data };
};

export const deletePatient = async (id) => {
  await db.query("DELETE FROM patients WHERE id = ?", [id]);
  return true;
};
