const mongoose = require("mongoose");

 const connectToDatabase = () => {
     mongoose.connect("mongodb+srv://Adithya:Adithya369@@notetakingapp.u8tdp.mongodb.net/scaler", () => {
         console.log("Connected to the database");
     });
 };

 module.exports = connectToDatabase;