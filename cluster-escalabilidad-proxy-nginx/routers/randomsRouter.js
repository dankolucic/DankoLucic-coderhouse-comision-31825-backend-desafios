import { Router } from "express"
import { randomsController } from "../controllers/randomsController.js"
//info

export const randomsRouter = Router()

randomsRouter.get("/", randomsController)