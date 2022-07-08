import { clienteSqlAdmin } from "../../database/SQL/config/client.js"

export async function obtenerProductos(){
    try{
        const productos = await clienteSqlAdmin.select("*").from("personas");
        return productos;
    } catch (err){
        throw new Error(`Error de escritura: ${err.message}`)
    }
    
}

export async function agregarProductos(producto){
    try{ 
        const idProducto = await clienteSqlAdmin.insert(producto).into("personas")
        console.log(`producto agregado ID:"${idProducto}"`)
    }catch(err){
        throw new Error(err.message)
    }

}