import { getConfig } from "./connection.js";
import crearKnex from "knex";

const clienteSqlAdmin = crearKnex(getConfig("mysql2","ADMIN"));
const clienteSqlUser = crearKnex(getConfig("mysql2","USER"));
const clienteSqlite = crearKnex(getConfig("sqlite3",""));

export {
    clienteSqlAdmin,
    clienteSqlUser,
    clienteSqlite
}