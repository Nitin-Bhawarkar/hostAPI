require("dotenv").config();

const connectDB = require("./db/connect"); // Connect to MongoDB
const Product = require("./models/product") // Schemma
const ProductJson = require("./products.json"); // json data available

const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URI);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("Sucess");
    } catch (error) {
        console.log(error);
    }
};

start();



