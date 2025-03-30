//Models:
const express = require('express');
const productRouter = require('./routes/products')
require('dotenv').config()
const app = express();
//midleWare:
app.use(express.json());
app.use('/api/products',productRouter);
//port
const port = 8000;
//connect to mongo and run server.
const connectDb = require('./db/connect');
const start = async ()=>{
    try{
        const conn = await connectDb(process.env.MONGO_URL);
        console.log('MongoDb connected',conn.connection.host);
        app.listen(port,()=>{console.log(`the server is running on port ${port}`)});
    }catch(err){
        console.error('ERROR: ',err);
    }
}
start();

