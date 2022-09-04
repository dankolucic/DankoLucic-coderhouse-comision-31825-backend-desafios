import { Router } from "express"
import { getUsersController } from "../controllers/usersController.js"

export const usersRouter = new Router()

usersRouter.get("/", getUsersController)

