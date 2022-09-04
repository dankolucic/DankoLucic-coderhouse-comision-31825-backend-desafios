import express from "express"
import { engine } from 'express-handlebars';
import cors from "cors";
//==============MINIMIST==============
import parseArgs from "minimist"
//====================================

import { sessionHandler as session } from "./middlewares/session.js"
import { passportMiddleware, passportSessionHandler } from "./middlewares/passport.js"

import { usersRouter } from "./routers/usersRouter.js"
import { authRouter } from "./routers/authRouter.js"
import { dataRouter } from "./routers/dataRouter.js"
import { viewsRouter } from "./routers/viewsRouter.js"
import { infoRouter } from "./routers/infoRouter.js"
import { infozipRouter } from "./routers/infozipRouter.js"
import { randomsRouter } from "./routers/randomsRouter.js"

import { runCluster } from "./cluster/cluster.js"

import { numCPUs } from "./cluster/cluster.js";

import { loggerServerInfo, loggerWarn, loggerServerError } from "./log/loggersFunctions.js"




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
app.use("/info", infoRouter)
app.use("/infozip", infozipRouter)
app.use("/api/randoms", randomsRouter)

//REVISAR!! está pasando por aqui en cada cosulta.
app.all("*", (req, res) => {
    const { url, method } = req
    loggerWarn(req)
    res.send(`Ruta ${method} ${url} no implementada`)
})

//========MINIMIST=================================
const args = parseArgs(process.argv.slice(2))
// const arg = parseArgs(["--PORT","8080"])

//=================================================
//listen

export let count = [];



export function createServer(){
    //===MINIST=========
    const PORT = args.PORT || 8080
    // ==================
    const server = app.listen( PORT ,() => {
            loggerServerInfo(PORT)
            count.push(1)
        })
    server.on("error", error => loggerServerError(error))

}

// node server.js --CLUSTER --PORT 8080
export let counterProcess = 1;

if(args.CLUSTER){
    runCluster()
    counterProcess = numCPUs
} else{
    createServer()
}














