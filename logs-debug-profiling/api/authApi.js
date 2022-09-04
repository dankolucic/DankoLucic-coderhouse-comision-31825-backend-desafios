import bcryptjs from "bcryptjs"
import { getUserByName } from "../persistence/users.js"

export async function authenticate(username, password) {
    let user;
    try {
        user = await getUserByName(username)
        console.log(`estoy en user ${user}`)
    } catch (error) {
        throw new Error('Authentication Error')
    }
    if (!(await compareHash(password, user.password))) {
        throw new Error('Authentication Error')
    }
    return user
}

async function compareHash(password,passwordHash){
    const compareBoolean = await bcryptjs.compare(password, passwordHash)
    // const compareBoolean = bcryptjs.compareSync(password, passwordHash)
    console.log(compareBoolean)
    return compareBoolean
}