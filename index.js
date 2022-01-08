const express=require("express");
//const path=require("path");

const connect = require("connectToDatabase")
const app=express();
app.get("/",(req,res)=>{
   /* const obj={
        name:"Adothya",
        email:"abc@gmsil.com"
    }*/
    return res.json();

    //return res.sendFile(__dirname,"//index.html")
});
app.listen(4400,()=>{
    console.log("Server started");
    connect();
});