import { getUsers } from "../persistence/users.js"

export const getUsersController = (req, res) =>{
    const users = getUsers()
    res.json(users)
}