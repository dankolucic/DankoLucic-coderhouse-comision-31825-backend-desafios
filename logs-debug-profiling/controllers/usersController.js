import { getUsers } from "../persistence/users.js"
import { loggerInfo } from "../log/loggersFunctions.js"

export const getUsersController = (req, res) =>{
    loggerInfo(req);
    const users = getUsers()
    res.json(users)
    // res.json(`hola ${process.pid}`)
}