import { clienteSqlite as knex } from '../client.js';

try {
    const exist = await knex.schema.hasTable("mensajes")
    if(!exist){
        await knex.schema.createTable("mensajes", tabla => {
            tabla.string("autor"),
            tabla.string("texto"),
            tabla.string("fecha"),
            tabla.string("hora")
        })
        console.log("tabla mensajes creada")
    }
    else{
        console.log('la tabla "mensajes" ya existe. No se realizaron cambios')
    }
} catch (error) {
    console.log(`falló la operación: ${error.message}`)
} finally {
    knex.destroy()
}