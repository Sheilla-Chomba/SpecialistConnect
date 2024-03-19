import { Router } from "express";
import { createSpec, getOneSpec, getSpecs, updateSpec } from "../Controllers/spec.controller";

const specRouter = Router()

specRouter.post('/:id', createSpec)
specRouter.put("/update/:id", updateSpec);
specRouter.get("/",getSpecs)
specRouter.get("/:id", getOneSpec);

export default specRouter;