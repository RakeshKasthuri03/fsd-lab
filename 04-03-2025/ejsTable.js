const express=require('express')
const ejs=require('ejs')
const app=express()
const users=require("./users.json")
app.use(express.static(__dirname+"/public"))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
     res.render("1",{users:users})
})
app.listen(3000,()=>{
    console.log('server is running on port 3000')
})