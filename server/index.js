const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require ('express');
const connectDB = require('./db/connection');
const User = require('./model/schema');

dotenv.config({path: './config.env'})

const app = express();

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

connectDB();


// app.get('/',(req,res)=>{
//     res.send(`Hello World from Form details page(index.js)!`);
// })

// app.get('/administrator', (req,res)=>{
//     res.send(`Hello form administrator page!`);
// })

console.log("testing");

app.listen(PORT, ()=>{
    console.log(`server is live on port ${PORT}!`);
})
