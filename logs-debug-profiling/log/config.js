import winston from "winston"
import { nodeEnv } from "../config.js"

function buildProdLogger(){
    const prodLogger = winston.createLogger({
        transports: [
            new winston.transports.File({ filename: "warn-prod.log", level: "warn"}),
            new winston.transports.File({ filename: "error-prod.log", level: "error"})    
        ]
    })
    return prodLogger
}

function buildDevLogger(){
    const devLogger = winston.createLogger({
        transports: [
            new winston.transports.Console({ level: "info" }),
            // el desafío solicita que warn y error aparezcan en archivos.
            new winston.transports.File({ filename: "warn-dev.log", level: "warn"}),
            new winston.transports.File({ filename: "error-dev.log", level: "error"}) 
        ]
    })
    return devLogger
}

let logger = null

if (nodeEnv == "production"){
    logger = buildProdLogger();
} else {
    logger = buildDevLogger()
    console.log("hola!!")
}

export default logger