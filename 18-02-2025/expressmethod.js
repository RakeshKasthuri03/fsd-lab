const express=require('express')
const fs = require('fs');
const app=express()

const users=require('./user.json')
app.use(express.json())
app.get("/User",(req,res)=>{
     
       // res.write("Hello Express")
        res.json(users)
    
})

app.post("/User",(req,res)=>{
    console.log("Post method")
    users.push(req.body)
    console.log(req.body)
    res.status(200).json(users)
    fs.writeFileSync("./user.json",JSON.stringify(users))

})

app.listen(3000,(req,res)=>{
    console.log("Server Created at 3000")
})