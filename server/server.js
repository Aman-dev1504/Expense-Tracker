const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config({path:"./config.env"});
const port=process.env.PORT||5000;
// use middlewares
app.use(cors());
app.use(express.json());

//db connection
const con=require('./db/connection.js');
//using routes
app.use(require('./routes/route'));

con
app.listen(port,()=>{
    console.log(`Server is up and running on port:${port}`)
})