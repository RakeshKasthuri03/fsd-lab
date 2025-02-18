const http = require('http');
const fs = require('fs');


const serve = http.createServer((req, res) => {
    console.log("Server created");
    fs.readFile('./index.html',(err,data)=>{
        if(err){
      
            res.statusCode="404"
            res.write("NOT FOUND")
            res.end()
         }
      
         else{
            res.write(data)
            res.end()
         }
    });
  
});

serve.listen(3000, () => {
    console.log("Server created at port 3000");
});