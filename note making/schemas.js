const express= require("mongoose");


const userSchema= new express.Mongoose.Schema({
    author:{
        type: String,
        default:"",
    },
    notes :{
        type: String,
        default:"",
    
    },
});

module.exports = mongoose.model("User", userSchema);