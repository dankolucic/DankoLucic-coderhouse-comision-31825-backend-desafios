import { createId } from "./Ids.js"

export function createUser(data){
    if(!data.username) throw new Error (`MISSING_ARGS: the "username" field is required`)
    if(!data.password) throw new Error (`MISSING_ARGS: the "password" field is required`)

    return {
        id: createId(),
        username: data.username,
        password: data.password
    }
    
}