const express = require("express");

// Define an array of objects representing products
const app=express()
const port=3000
const cors = require("cors")
//create api for show in port
//mongoose db connection
const mongoose = require('mongoose');
app.use(cors());
const categoryRoutes=require('./routes/categroy')
app.use(express.json());
async function connectDB(){
    await mongoose.connect("mongodb://localhost:27017/",{
    dbname: "e-com-store-db"
   
});
console.log('connected DB');
}
connectDB().catch((err)=>{
    console.error(err)
})

//middleware
app.use('/category',categoryRoutes)

//api for show products


//  app.get("/",(req,res)=>{
//     res.json([
//         {id:1,name:"Product 1",price:100},
//         {id:2,name:"Product 2",price:200},
//         {id:3,name:"Product 3",price:300}
//     ])
// })

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
