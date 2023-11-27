import {Router} from "express";

import {getPatients} from "../controllers/products.controllers";

const router = Router();

router.get("/patients", getPatients);





export default router
