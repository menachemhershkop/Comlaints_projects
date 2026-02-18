import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectMango } from './db/connect.js';
import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';
import checkToken from './middlewares/requireAdminAuth.js';

const app = express();
app.use(cors());
app.use(express.json());

const db = await connectMango({
    uri: process.env.MONGO_URI,
    dbName: process.env.DB_NAME
})
const complaints = db.collection('soliderComplaient');

app.post('/api/complaints', (req,res)=>{
    const {category, content} = req.body;
    try{
    complaints.insertOne({category:category, content:content, 'createdAt':Date()})
     res.send('Complaient send', category, content)
    } catch(err){
        res.send('Somthing worng...');
    };
});

app.post('/api/admin/login', (req,res)=>{
    const {password} = req.body;
    if (password == process.env.ADMIN_PASSWORD){
        const paylod  = {password:password}
        const secret = process.env.SECRET;
        const token = jwt.sign(paylod, secret, { expiresIn:'15m'});
        res.send(token)
    }
    else{
        res.status(401).send('Unauthorized')
    }

})


app.get('/api/complaints',checkToken, async (req, res)=>{
    res.send(await complaints.find().toArray())
})








app.listen(8080,()=>{
    console.log('listening');
    
})