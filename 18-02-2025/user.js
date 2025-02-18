const http = require('http');
const fs = require('fs');


const serve = http.createServer((req, res) => {
    console.log("Server created");
   if(req.url === '/Home'){
        res.statusCode="200"
        res.write("Welcome to Home")
        res.end()
     }
   else if(req.url === '/Contact'){
        res.statusCode="200"
        res.write("Contact Us")
        res.end()
     }
   else if(req.url === '/About'){
        res.statusCode="200"
        res.write("About Us")
        res.end()
     }
     else{
        res.statusCode="404"
        res.write("NOT FOUND")
        res.end()
     }
});

serve.listen(3000, () => {
    console.log("Server created at port 3000");
});