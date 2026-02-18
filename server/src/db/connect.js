import {MongoClient} from 'mongodb';

export async function connectMango({url, dbName}) {
    const client = new MongoClient(url);
    await client.connect();
    const db  = client.db(dbName);
    console.log("MongoDB connected:", db.databaseName);
    return db
}