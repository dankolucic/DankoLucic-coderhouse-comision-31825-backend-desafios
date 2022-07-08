// // import { clienteSqlAdmin } from "../../database/SQL/config/client.js"

let productos = [{
    id:1,
    tittle:"tittle_1",
    price:100,
    thumbnail:"URL_1"
}];

export function obtenerProductos(){
    return productos;
}

export async function agregarProductos(producto){
    producto.id = idGenerate()
    productos.push(producto)
    return productos
}

function idGenerate(){
let array = [];
if(productos.length >= 1){
    for(let index=0; index < productos.length; index++){
    array[index] = Number(productos[index].id)
    }
    array.sort((a,b)=>a-b)
    return (array[array.length-1]+1)
}
else{
    return 0;
}

}

// export async function obtenerProductos(){
//     try{
//         const productos = await clienteSqlAdmin.select("*").from("personas");
//         return productos;
//     } catch (err){
//         throw new Error(`Error de escritura: ${err.message}`)
//     }
    
// }

// export async function agregarProductos(producto){
//     try{ 
//         const idProducto = await clienteSqlAdmin.insert(producto).into("personas")
//         console.log(`producto agregado ID:"${idProducto}"`)
//     }catch(err){
//         throw new Error(err.message)
//     }

// }

