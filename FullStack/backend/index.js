const express = require("express");

// Define an array of objects representing products
const app=express()
const port=3000
//create api for show in port
 app.get("/",(req,res)=>{
    res.json([
        {id:1,name:"Product 1",price:100},
        {id:2,name:"Product 2",price:200},
        {id:3,name:"Product 3",price:300}
    ])
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
