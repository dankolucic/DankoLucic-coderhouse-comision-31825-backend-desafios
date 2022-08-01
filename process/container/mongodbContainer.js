import { MongoClient } from 'mongodb';
import config from "../database/config.js"

const uri = config.mongodb_cloud.uri

const param = {
    database: 'coderhouse',
    collection: 'users',
}

let client;

export const mongodbContainer = {

    insertUser: async (user) => {
        try {
            client = new MongoClient(uri);
            await client.connect();
           
            const database = client.db(param.database);
            const collection = database.collection(param.collection);
    
            await collection.insertOne(user)
        } 
        catch (error) {
            throw new Error(`Error in 'insert()': ${err.message}`);
        } finally {
            await client.close();
        }

    },

    getAllUsers: async () => {
        try{
            client = new MongoClient(uri);
            await client.connect();
           
            const database = client.db(param.database);
            const collection = database.collection(param.collection);
    
            const users = await collection.find().toArray();
            return users
        } catch (err){
            throw new Error(`Error in 'getAll()': ${err.message}`);
        } finally {
            await client.close();
        }

    }

}



