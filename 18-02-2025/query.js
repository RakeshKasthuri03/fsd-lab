const http = require('http');
const fs = require('fs');
const users=require('./user.json');
const url=require('url')

const serve = http.createServer((req, res) => {
    const parseUrl=url.parse(req.url,true);
    if(parseUrl.pathname === '/greet'){
           const name=parseUrl.query.name;
           if(name){
               res.write(`Hello ${name}`)
               res.end()
           }
           else{
            res.write("Name not found")
            res.end()
           }
    }
     
});

serve.listen(3000, () => {
    console.log("Server created at port 3000");
});