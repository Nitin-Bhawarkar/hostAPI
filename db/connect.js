
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);



const connectDB = (uri) =>{
    return mongoose.connect(uri , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
};
console.log(`Mongodb database is Connected ..!!!`);

module.exports = connectDB;








