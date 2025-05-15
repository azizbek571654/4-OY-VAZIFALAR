import { Router } from "express";
import { Guruhlarcontroller } from "../controller/guhlar.controller.js";


const router = Router();
const controller = new Guruhlarcontroller();

router.post("/", controller.crateGuruhlar)
    .get('/', controller.getAllGuruxlar)
    .get("/:id", controller.getGuruxlarById)
    .patch('/:id', controller.updateGrupsById)
    .delete('/:id', controller.deleteGprubById)

export default router;