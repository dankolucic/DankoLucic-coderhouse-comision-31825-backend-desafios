import { promises as fs } from 'fs';
import { normalize, schema } from "normalizr";
import util from "util";

const persistenceFilePath = "database/json/messagePersistenceFile.json";

const autorSchema = new schema.Entity("autor",{},{ idAttribute: 'email' })

const myArray = new schema.Array(
    {
        autor:autorSchema,
    });

//para obtener el historial de mensajes, con normalizar.
export async function obtenerMensajes(){
    try{
        const data = await fs.readFile(persistenceFilePath, "utf-8");
        const mensajes = JSON.parse(data);
        const mensajesNormalizados = Normalizar(mensajes)
        return mensajesNormalizados;
    } catch (err){
        throw new Error(`Error de lectura: ${err.message}`)
    }
}

//para obtener los mensajes y pushear el nuevo mensaje (sin normalizar)
export async function _obtenerMensajes(){
    try{
        const data = await fs.readFile(persistenceFilePath, "utf-8");
        const mensajes = JSON.parse(data);
        return mensajes;
    } catch (err){
        throw new Error(`Error de lectura: ${err.message}`)
    }
}

function print(objeto){
    console.log(util.inspect(objeto,false,12,true))
}

function Normalizar(mensajes){
    const mensajesNormalizados = normalize(mensajes, myArray)
    return mensajesNormalizados
}

export async function agregarMensajes(mensaje){
    try{
        const mensajes = await _obtenerMensajes();
        mensaje.id = idGenerate(mensajes);
        mensajes.push(mensaje);
        let mensajesString = JSON.stringify(mensajes);
        await fs.writeFile(persistenceFilePath, mensajesString ,"utf-8");   
        console.log("se creó nuevo mensaje");
    }catch(err){
        throw new Error(`Error de escritura: ${err.message}`)
    }
}

function idGenerate(mensajes){
    let array = [];
    if(mensajes.length >= 1){
        for(let index=0; index < mensajes.length; index++){
        array[index] = Number(mensajes[index].id)
        }
        array.sort((a,b)=>a-b)
        return (array[array.length-1]+1)
    }
    else{
        return 1;
    }
}

// import { clienteSqlite } from "../../database/SQL/config/client.js"

// export async function obtenerMensajes(){
//     try{
//         const mensajes = await clienteSqlite.select("*").from("mensajes")
//         return mensajes
//     } catch (err){
//         throw new Error(`Error de lectura: ${err.message}`)
//     }
// }

// export async function agregarMensajes(mensaje){
//     try{ 
//         await clienteSqlite.insert(mensaje).into("mensajes")
//         console.log("se creó nuevo mensaje")
//     }catch(err){
//         throw new Error(`Error de escritura: ${err.message}`)
//     }
// }