const mongoose = require("mongoose");
const connectMongo = () => {
    mongoose.connect("mongodb://localhost:27017/scaler", () =>{
        console.log("connected to database");
    });
    
    
   
};

module.exports = connectToDatabase;