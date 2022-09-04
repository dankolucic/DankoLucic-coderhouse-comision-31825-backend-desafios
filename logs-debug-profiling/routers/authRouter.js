import { Router } from "express"

import {
    failLoginController, successLoginController,
    failRegisterController, successRegisterController,
    registerController, loginController, logoutController
} from "../controllers/authController.js"

export const authRouter = Router()

//register
authRouter.post("/register", registerController)
authRouter.get("/failRegister", failRegisterController)
authRouter.get("/successRegister", successRegisterController)

//login
authRouter.post("/login", loginController)
authRouter.get("/failLogin", failLoginController)
authRouter.get("/successLogin", successLoginController)

//logout
authRouter.get("/logout", logoutController)






