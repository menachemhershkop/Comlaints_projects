import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectMango } from './db/connect.js';
import { ObjectId } from 'mongodb';

const app = express();
app.use(cors());
app.use(express.json());

const db = await connectMango({
    url: process.env.MONGO_URL,
    dbName: process.env.DB_NAME
})
const complaints = db.collection('soliderComplaient');

app.post('/api/complaints', (req,res)=>{
    const {category, message} = req.body;
    console.log(category, message);
    complaints.insertOne({category:category, message:message, 'createdAt':Date()})
});

app.post('/api/admin/login', (res,req)=>{

})


app.get('/api/complaints', (req, res)=>{
    
})








app.listen(8080,()=>{
    console.log('listening');
    
})