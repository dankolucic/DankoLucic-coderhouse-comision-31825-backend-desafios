
export const infoController = (req, res) =>{
    const info = {
        "path ejecucion": process.cwd(),
        "path": process.execPath,
        "sistema operativo": process.platform,
        "process ID": process.pid,
        "Node JS version": process.version,
        "Memory use": process.memoryUsage(),
    }
    res.json(info)
}