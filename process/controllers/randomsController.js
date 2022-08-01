import { fork } from "child_process"

export const randomsController = (req, res) =>{
    const cant = ( req.query.cant || 100000000 )
    const childProcess = fork("./childprocess/random.js")
    childProcess.on("message", msg => {
        if(msg == "ok"){
            childProcess.send(cant)
        } else {
            res.json(msg)
        }

    })

}