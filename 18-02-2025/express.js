const express=require('express')
const app=express()

app.get("/",(req,res)=>{
     
        res.write("Hello Express")
        res.end()
    
})

app.listen(3000,(req,res)=>{
    console.log("Server Created at 3000")
})