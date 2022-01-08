// require('dotenv').config();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path: './config.env'});
const url= 'mongodb+srv://pratik01:pratik01@cluster0.i26mr.mongodb.net/reactform?retryWrites=true&w=majority';
// const MONGO_URI= 'mongodb+srv://pratik01:pratik01@cluster0.i26mr.mongodb.net/reactform?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connection SUCCESS!");
    } catch (error) {
        console.error("MongoDB connection FAILS!");
        process.exit(1);
    }
};

module.exports = connectDB;