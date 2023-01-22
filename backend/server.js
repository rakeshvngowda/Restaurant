//  main express file
require('dotenv').config()

// creating app express
const express = require('express')
const app = express()

// mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open',()=> {
    console.log(`Connected to mongoose`);
})

// listing port block
app.listen(process.env.PORT,()=>{
    console.log(`listening to port ${process.env.PORT}`);
})
