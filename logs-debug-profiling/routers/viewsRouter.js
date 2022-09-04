import { Router } from "express"
import { viewsController } from "../controllers/viewsController.js"

export const viewsRouter = Router()

viewsRouter.get("/", viewsController.inicial)
viewsRouter.get("/errorLogin", viewsController.errorLogin)
viewsRouter.get("/register", viewsController.register)
viewsRouter.get("/errorRegister", viewsController.errorRegister)
viewsRouter.get("/logout", viewsController.logout)
viewsRouter.get("/errorLogout", viewsController.errorLogout)


