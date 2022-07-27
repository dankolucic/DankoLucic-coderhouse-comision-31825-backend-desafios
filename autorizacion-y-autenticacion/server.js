import express from "express"
import { engine } from 'express-handlebars';
import cors from "cors";

import { sessionHandler as session } from "./middlewares/session.js"
import { passportMiddleware, passportSessionHandler } from "./middlewares/passport.js"

import { usersRouter } from "./routers/usersRouter.js"
import { authRouter } from "./routers/authRouter.js"
import { dataRouter } from "./routers/dataRouter.js"
import { viewsRouter } from "./routers/viewsRouter.js"
import {mongodbContainer} from "./container/mongodbContainer.js"

const app = express()

//=================================================
//handlebars
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

//=================================================
//middleware
app.use(express.static("public"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(session)
app.use(passportMiddleware)
app.use(passportSessionHandler)


//=================================================
//rutes
app.use("/api/users",usersRouter)
app.use("/auth", authRouter)
app.use("/api/data", dataRouter)
app.use("/", viewsRouter)

//=================================================
//listen
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})

console.log(await mongodbContainer.getAllUsers())