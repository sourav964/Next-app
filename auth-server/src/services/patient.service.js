import {
  createPatient as repoCreate,
  getPatients as repoGetAll,
  getPatientById as repoGetById,
  updatePatient as repoUpdate,
  deletePatient as repoDelete,
} from "../repositories/patient.repository.js";

import { PatientDTO, CreatePatientDTO, UpdatePatientDTO } from "../dto/patient.dto.js";

export const createPatient = async (payload) => {
  const dto = new CreatePatientDTO(payload);
  const patient = await repoCreate(dto);
  return new PatientDTO(patient);
};

export const getAllPatients = async () => {
  const patients = await repoGetAll();
  return patients.map((p) => new PatientDTO(p));
};

export const getPatient = async (id) => {
  const patient = await repoGetById(id);
  return patient ? new PatientDTO(patient) : null;
};

export const updatePatient = async (id, payload) => {
  const dto = new UpdatePatientDTO(payload);
  const patient = await repoUpdate(id, dto);
  return new PatientDTO(patient);
};

export const deletePatient = async (id) => {
  return await repoDelete(id);
};
