//need 3 softwares mongo compass gui, mongo community server, mongo shell
const { response } = require('express');
const mongoose = require('mongoose');


const connectDB = async()=>{
  try{
    const response = await mongoose.connect(process.env.DB_URL);
    console.log("DataBase Connected");
    
  }catch(error){
    console.log("DataBase Connection Failed!!")
  }
}

module.exports = connectDB;