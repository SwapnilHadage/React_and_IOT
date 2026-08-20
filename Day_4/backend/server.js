const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;
const connectDB = require('./config/db')
connectDB();

app.get('/', (req, res)=>{
  res.send({message: `Server Running on ${port}`});
});



app.listen(port, ()=>{
  console.log(`Server is running on => http://localhost:${port}`);
  
})


