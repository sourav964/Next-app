import express from "express";
import {
  addPatient,
  listPatients,
  getSinglePatient,
  editPatient,
  removePatient,
} from "../controllers/patient.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, addPatient);
router.get("/", authenticate, listPatients);
router.get("/:id", authenticate, getSinglePatient);
router.put("/:id", authenticate, editPatient);
router.delete("/:id", authenticate, removePatient);

export default router;
