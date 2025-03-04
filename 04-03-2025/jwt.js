const jwt=require('jsonwebtoken')
const express=require('express')
const app=express()
const users=require("./users.json")
const { json } = require('body-parser')

app.get("/login/:id",(req,res)=>{
    const id=req.params.id;
    const user=users.find(user=>user.id===Number(id))
    console.log(user)
    if(user!=undefined){
        const token=jwt.sign({id:user.id},"Secret_key")
        res.status(200).json({token})
    }
    else{
        res.status(404).json({message:"Not Found"})
    }
})

app.get("/:id",(req,res)=>{
   const {id}=req.params
    const c=req.headers["authorization"]
    console.log(c)
    const token=c.split(" ")[1]
    if(token){
         jwt.verify(token,"Secret_key",(err,data)=>{
            if(err){
                res.status(500).json({message:"Error"})
            }
            else{
                console.log(data)
                if(id == data.id){
                res.json(users)
                console.log(users)
                }
            }
         })
    }
})
app.listen(3000,()=>{
})