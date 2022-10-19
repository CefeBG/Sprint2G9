import { Router } from "express";

import {
    agregarTarea,
    renderTarea,
    realizada,
    actualizarTarea,
    editarTareas,
    eliminarTareas,
} from "../controllers/tareas.controllers.js";

const router = Router();

router.get("/", renderTarea);

router.post("/tarea/agregar", agregarTarea);

router.get("/tarea/:id/realizada", realizada);

router.get("/tarea/:id/editar", actualizarTarea);

router.post("/tarea/:id/editar", editarTareas);

router.get("/tarea/:id/eliminar", eliminarTareas);

export default router;

