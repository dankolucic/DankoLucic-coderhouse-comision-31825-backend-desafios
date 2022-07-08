//usuario root mySQL

const SqliteConfig = {
    filename: "database/SQL/config/db.sqlite"
}

const adminDbConfig = {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "mysqlpassword",
    database: "coderhouse"
}


//usario lecturach mySQL
const userDbConfig = {
    host: "127.0.0.1",
    port: 3306,
    user: "lecturach",
    password: "lecturach",
    database: "coderhouse"
}


export function getConfig(client, rol){
    //config mySQL
    if(client == "mysql2"){
        if(rol == "ADMIN"){
            return {
                client: "mysql2",
                connection: adminDbConfig
            }
        }
        else{
            return {
                client: "mysql2",
                connection: userDbConfig
            }
        }
    }
    //config SQLite3
    if(client == "sqlite3"){
        return {
            client: "sqlite3",
            connection: SqliteConfig,
            useNullAsDefault: true
        }
    }
}