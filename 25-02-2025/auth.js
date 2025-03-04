const express=require('express')
const fs=require('fs')
const app=express()
const jwt=require('jsonwebtoken')

const user={ username:"rakesh", pass:"12"}

jwt.sign(user,"Secrate Key",(err,token)=>{
    console.log(token)
})
