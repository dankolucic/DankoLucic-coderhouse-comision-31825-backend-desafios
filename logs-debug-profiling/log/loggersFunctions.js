import logger from "./config.js"

export function loggerInfo(req){
    const { originalUrl , method } = req;
    logger.info(`request received by route '${originalUrl}' and method '${method}'`)
}

export function loggerServerInfo(PORT){
    logger.info(`express server listening on port '${PORT}'`)
}

export function loggerWarn(req){
    const { originalUrl, method} = req;
    logger.warn(`route '${originalUrl}' and method '${method}' not implemented`)
}

export function loggerServerError(error){
    logger.error(`server error: '${error}'`)
}