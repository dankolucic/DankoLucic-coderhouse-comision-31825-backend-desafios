import { Router } from "express"
import { infoController, infoClusterController } from "../controllers/infoController.js"
import compression from "compression";

//info

export const infozipRouter = Router()

infozipRouter.get("/", compression(), infoController)
infozipRouter.get("/cluster", infoClusterController)