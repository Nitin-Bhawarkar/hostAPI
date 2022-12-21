
require("dotenv").config();
const express = require('express');
const app = express();
const product_routes = require('./routes/products');
const connectDB = require("./db/connect");

app.get('/', (req , res) => {
    res.send("Hii ... I'm Live now..!!!")
})

// middleware or to set router

app.use("/api/products" , product_routes);



// PORT & userName 

const PORT = process.env.PORT;

const start = async ()=>{

    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT ,  () => {
            console.log(`Server is connected on ${PORT}`)
                });

    } catch (error) {
        console.log(error);
    }
}

start();






