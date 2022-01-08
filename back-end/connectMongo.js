const mongoose = require("mongoose");

 const connectToDatabase = () => {
     mongoose.connect("mongodb://localhost:27017/scaler", () => {
         console.log("Connected to the database");
     });
 };

 module.exports = connectToDatabase;