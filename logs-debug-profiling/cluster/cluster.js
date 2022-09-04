import cluster from "cluster"
import os from "os"
import { createServer } from "../server.js"

export const numCPUs = os.cpus().length

export function runCluster(){

    if(cluster.isPrimary){

        console.log(`PID PRIMARIO ${process.pid}`)
    
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork()
        }
    
        //cluster con balanceo de carga usando estrategia:
        //ROUND ROBIN
    
        cluster.on("exit", (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} died`)
            cluster.fork()
    
        })
    } else {
        createServer()
    }

}



