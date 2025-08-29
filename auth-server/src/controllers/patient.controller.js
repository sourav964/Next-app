import {
  createPatient,
  getAllPatients,
  getPatient,
  updatePatient,
  deletePatient,
} from "../services/patient.service.js";

export const addPatient = async (req, res) => {
  try {
    const patient = await createPatient(req.body);
    res.status(201).json({ success: true, data: patient, message: "Patient created" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const listPatients = async (req, res) => {
  try {
    const patients = await getAllPatients();
    res.json({ success: true, data: patients });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSinglePatient = async (req, res) => {
  try {
    const patient = await getPatient(req.params.id);
    if (!patient) return res.status(404).json({ success: false, message: "Patient not found" });
    res.json({ success: true, data: patient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const editPatient = async (req, res) => {
  try {
    const patient = await updatePatient(req.params.id, req.body);
    res.json({ success: true, data: patient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const removePatient = async (req, res) => {
  try {
    await deletePatient(req.params.id);
    res.json({ success: true, message: "Patient deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
