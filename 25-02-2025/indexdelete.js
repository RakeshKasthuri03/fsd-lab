const express=require('express')
const fs=require('fs')
const app=express()
const user=require("./user.json")
console.log(user)
app.use(express.json())
app.delete("/user/:id",(req,res)=>{
    const id=req.params.id
    const user1=user.find(user=>user.id===Number(id))
    if(user1){
       const index=user.indexOf(user1)
        console.log(index)
        user.splice(index,1)
       fs.writeFileSync("./user.json",JSON.stringify(user))
         res.status(200).json(user)  
    }
    else{
        res.status(404).send("Not found")
    }
    //   res.status(200).json(user)
})
app.listen(3000,()=>{
    console.log("Server runs at 3000 port")
})