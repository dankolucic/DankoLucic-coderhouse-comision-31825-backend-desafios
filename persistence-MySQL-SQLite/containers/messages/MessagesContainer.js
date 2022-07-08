import { clienteSqlite } from "../../database/SQL/config/client.js"

export async function obtenerMensajes(){
    try{
        const mensajes = await clienteSqlite.select("*").from("mensajes")
        return mensajes
    } catch (err){
        throw new Error(`Error de escritura: ${err.message}`)
    }
}

export async function agregarMensajes(mensaje){
    try{ 
        await clienteSqlite.insert(mensaje).into("mensajes")
        console.log("se creó nuevo mensaje")
    }catch(err){
        throw new Error(err.message)
    }
}