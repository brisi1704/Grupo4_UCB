import {Router} from "express";

import {getPatients, createNewPatient, getPatientsById, deletePatientsById, getTotalPatients, updatePatientsById} from "../controllers/products.controllers";

const router = Router();

router.get("/patients", getPatients);

router.post("/patients", createNewPatient);

router.get("/patients/count", getTotalPatients);

router.get("/patients/:id", getPatientsById);

router.delete("/patients/:id", deletePatientsById);

router.put("/patients/:id", updatePatientsById);





export default router
