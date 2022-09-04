import { createUser } from "../models/User.js"
import { saveUser, ensureUniqueName } from "../persistence/users.js"

export async function registerUser(userData){
    await ensureUniqueName(userData.username)
    const user = createUser(userData)
    await saveUser(user)
    return user
}