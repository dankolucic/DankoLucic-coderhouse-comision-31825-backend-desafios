import { clienteSqlAdmin as knex } from '../client.js';

try {
    const exist = await knex.schema.hasTable("personas")
    if(!exist){
        await knex.schema.createTable("personas", tabla => {
            tabla.increments("id"),
            tabla.string("tittle"),
            tabla.integer("price"),
            tabla.string("thumbnail")
        })
        console.log("tabla persona creada")
    }
    else{
        console.log('la tabla "persona" ya existe. No se realizaron cambios')
    }
} catch (error) {
    console.log(`falló la operación: ${error.message}`)
} finally {
    knex.destroy()
}