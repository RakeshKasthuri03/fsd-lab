const fs=require('fs');

fs.readFile("./sample.txt","utf-8",(err,data)=>{
     if(err){
          console.log("error in file or File not exits");
     }
     else{
        console.log(data);
     }
});