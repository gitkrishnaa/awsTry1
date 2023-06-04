const express=require("express")

const app=express()
app.get("/",(req,res)=>{
    res.send("hello krishna")
    console.log("server started at port 3000")
})
console.log("index.js working fine")
app.listen(3000)
