const ejs=require('ejs')
const express=require('express')
const app=express()
app.use(express.static(__dirname+"/public"))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("1")
})
app.listen(3000,()=>(
    console.log("server run at 3000 port")
))