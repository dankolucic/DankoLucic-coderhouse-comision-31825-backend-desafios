import { counterProcess } from "../server.js"

export const infoController = (req, res) =>{
    const info = {
        "number of processors": counterProcess,
        "path ejecucion": process.cwd(),
        "path": process.execPath,
        "sistema operativo": process.platform,
        "process ID": process.pid,
        "Node JS version": process.version,
        "Memory use": process.memoryUsage(),
    }
    res.json(info)
}

export const infoClusterController = (req, res) => {
    res.send(`Hola Mundo desde el proceso ${process.pid}`)
    // res.end()
}