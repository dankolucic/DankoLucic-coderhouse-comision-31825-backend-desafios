import { Router } from "express"

import { dataController } from "../controllers/dataController.js"
import { requiredAuthorization } from "../middlewares/authorization.js"

export const dataRouter = Router()

dataRouter.get("/",requiredAuthorization, dataController )
