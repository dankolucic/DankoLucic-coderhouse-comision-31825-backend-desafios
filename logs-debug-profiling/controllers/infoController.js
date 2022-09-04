import { counterProcess } from "../server.js"
import { loggerInfo } from "../log/loggersFunctions.js"

function addFunction(){
    const arrayAux = 1000;
    let add = [];

    for (let i = 0; i < arrayAux; i++) {
        add.push({"hola": `HOLA SOY EL NUMERO: ${i}`})
    
    }
    return add
}

export const infoController = (req, res) =>{
    loggerInfo(req)
    const info = {
        "number of processors": counterProcess,
        "path ejecucion": process.cwd(),
        "path": process.execPath,
        "sistema operativo": process.platform,
        "process ID": process.pid,
        "Node JS version": process.version,
        "Memory use": process.memoryUsage(),
    }

    const add = addFunction()

    const infoAdd  = Object.assign({}, info, add);
    res.json(infoAdd)
}

export const infoClusterController = (req, res) => {
    loggerInfo(req)
    res.send(`Hola Mundo desde el proceso ${process.pid}`)
    // res.end()
}