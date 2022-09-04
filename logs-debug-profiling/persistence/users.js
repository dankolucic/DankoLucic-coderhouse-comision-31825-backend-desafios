import { mongodbContainer } from "../container/mongodbContainer.js"

export async function saveUser(user){
    await mongodbContainer.insertUser(user)
}

export async function getUsers(){
    const users = await mongodbContainer.getAllUsers()
    return users
}

export async function getUserByName(username){
    const users = await mongodbContainer.getAllUsers()
    const user = users.find( u => u.username == username)
    if(!user){
        throw new Error ("there is no user with that name")
    }
    return user
}

export async function ensureUniqueName(username){
    const users = await mongodbContainer.getAllUsers()
    const user = users.find(u => u.username == username)
    if(user){
        throw new Error("username is not available")
    }
}

export async function getUserByID(id){
    const users = await mongodbContainer.getAllUsers()
    const user = users.find(u => u.id == id)
    if(!user){
        throw new Error("there is no user with that id")
    }
    return user
}