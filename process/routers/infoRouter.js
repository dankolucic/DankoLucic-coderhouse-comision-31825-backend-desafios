import { Router } from "express"
import { infoController } from "../controllers/infoController.js"
//info

export const infoRouter = Router()

infoRouter.get("/", infoController)