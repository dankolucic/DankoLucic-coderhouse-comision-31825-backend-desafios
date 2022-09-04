import { Router } from "express"
import { infoController, infoClusterController } from "../controllers/infoController.js"

//info

export const infoRouter = Router()

infoRouter.get("/",infoController)
infoRouter.get("/cluster", infoClusterController)